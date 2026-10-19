/* Backtest mô hình ước tính trên DỮ LIỆU GIẢ LẬP.
 * Chạy: node backtest.js
 *
 * Mô phỏng 200 buổi khám của một phòng. Mỗi buổi có "tốc độ thật" ngẫu nhiên (bác sĩ nhanh/chậm)
 * và 25 người với loại lượt ngẫu nhiên. Mỗi khi phòng gọi một người, ta dự đoán thời gian chờ
 * cho từng người còn trong hàng (1–10 người phía trước), rồi so với thời gian chờ thật.
 *
 * So sánh 3 cách:
 *  A. Ngây thơ: số người phía trước × 7 phút (cái mà người bệnh tự nhẩm hoặc một app đơn giản sẽ làm)
 *  B. Theo loại lượt, KHÔNG học tốc độ hôm nay (pace = 1)
 *  C. Theo loại lượt + học tốc độ hôm nay (mô hình dùng trong prototype)
 *
 * LƯU Ý: dữ liệu được sinh từ chính giả định của mô hình, nên kết quả chỉ cho thấy cơ chế hoạt động
 * đúng như thiết kế; nó KHÔNG chứng minh mô hình đúng ở viện thật. Cần backtest lại trên log
 * hệ thống xếp hàng của Vinmec.
 */
const M = require("./wait-model.js");
const rng = M.mulberry32(2026);
const MIX = [["tai_kham", 0.5], ["kham_moi", 0.3], ["doc_kq", 0.2]];
const pickType = () => { let r = rng(), c = 0; for (const [t, p] of MIX) { c += p; if (r < c) return t; } return "tai_kham"; };

const stats = { A: [], B: [], C: [] };
const cover = { B: 0, C0: 0, C: 0 }, n = { all: 0 };
const leaveRisk = { said_ok: 0, missed: 0 };

for (let day = 0; day < 200; day++) {
  const truePace = Math.exp(0.2 * M.randn(rng));          // ~ ±20% giữa các ngày
  const pts = Array.from({ length: 25 }, () => ({ type: pickType() }));
  pts.forEach(p => p.actual = M.drawService(p.type, truePace, rng));
  let t = 0; pts.forEach(p => { p.start = t; t += p.actual; });

  for (let i = 1; i < pts.length; i++) {                   // thời điểm người i được gọi
    const now = pts[i].start;
    const done = pts.slice(0, i).map(p => ({ type: p.type, actual: p.actual }));
    const paceHat = M.estimatePace(done);
    for (let j = i + 1; j < Math.min(pts.length, i + 11); j++) {
      const ahead = pts.slice(i + 1, j).map(p => p.type);
      const actualWait = pts[j].start - now;
      const naive = (ahead.length + 1) * 7;
      const b = M.predictWait({ ahead, inService: pts[i].type, pace: 1, n: 300, seed: i * 31 + j });
      const c = M.predictWait({ ahead, inService: pts[i].type, pace: paceHat, paceSd: M.paceSd(done.length), n: 300, seed: i * 31 + j });
      const c0 = M.predictWait({ ahead, inService: pts[i].type, pace: paceHat, n: 300, seed: i * 31 + j });
      if (actualWait >= c0.lo && actualWait <= c0.hi) cover.C0++;
      stats.A.push(Math.abs(naive - actualWait));
      stats.B.push(Math.abs(b.mid - actualWait));
      stats.C.push(Math.abs(c.mid - actualWait));
      if (actualWait >= b.lo && actualWait <= b.hi) cover.B++;
      if (actualWait >= c.lo && actualWait <= c.hi) cover.C++;
      n.all++;
      // Quy tắc "rời chỗ 20 phút": chỉ nói kịp khi P10 >= 20 + 10. Lỡ lượt nếu thực tế < 20.
      if (c.lo >= 30) { leaveRisk.said_ok++; if (actualWait < 20) leaveRisk.missed++; }
    }
  }
}
const mae = a => (a.reduce((s, x) => s + x, 0) / a.length).toFixed(1);
console.log(`Số dự đoán: ${n.all}`);
console.log(`Sai số tuyệt đối trung bình (phút):  A ngây thơ = ${mae(stats.A)} | B theo loại lượt = ${mae(stats.B)} | C + tốc độ hôm nay = ${mae(stats.C)}`);
console.log(`Tỉ lệ thời gian thật nằm trong khoảng P10–P90 (mục tiêu ~80%):  B = ${(100 * cover.B / n.all).toFixed(1)}% | C bản đầu (coi tốc độ là chắc chắn) = ${(100 * cover.C0 / n.all).toFixed(1)}% | C bản sửa (có độ bất định tốc độ) = ${(100 * cover.C / n.all).toFixed(1)}%`);
console.log(`Quy tắc "rời 20 phút": nói "kịp" ${leaveRisk.said_ok} lần, trong đó lỡ lượt ${leaveRisk.missed} lần (${(100 * leaveRisk.missed / Math.max(1, leaveRisk.said_ok)).toFixed(2)}%)`);
