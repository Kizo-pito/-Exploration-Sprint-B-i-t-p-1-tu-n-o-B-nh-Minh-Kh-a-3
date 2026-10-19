/* Mô hình ước tính thời gian chờ – dùng chung cho prototype (trình duyệt) và backtest (Node).
 *
 * Ý tưởng: không giả định mọi người khám lâu như nhau.
 *  1. Mỗi LOẠI lượt có phân phối thời gian riêng (học từ lịch sử của viện; ở đây là số giả lập).
 *     Loại lượt là thông tin hành chính (khám mới / tái khám / đọc kết quả), KHÔNG phải chẩn đoán.
 *  2. Tốc độ của phòng HÔM NAY (bác sĩ nhanh/chậm, ca khó) học trực tiếp từ các lượt vừa khám xong
 *     (dấu thời gian gọi số của hệ thống xếp hàng), co về 1 khi còn ít dữ liệu.
 *  3. Cộng thời gian của từng người phía trước bằng mô phỏng Monte Carlo → ra KHOẢNG (P10–P90),
 *     không ra một con số giả vờ chính xác.
 */
(function (root) {
  const VISIT = {
    tai_kham: { label: "Tái khám",    median: 6,  sigma: 0.35 },
    kham_moi: { label: "Khám mới",    median: 11, sigma: 0.40 },
    doc_kq:   { label: "Đọc kết quả", median: 4,  sigma: 0.40 },
    xn:       { label: "Lấy máu",     median: 3,  sigma: 0.30 },
    sa:       { label: "Siêu âm",     median: 9,  sigma: 0.35 },
    kq_lis:   { label: "Trả kết quả xét nghiệm", median: 60, sigma: 0.25 }
  };

  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function randn(rng) {
    let u = 0, v = 0;
    while (!u) u = rng();
    while (!v) v = rng();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }
  function drawService(type, pace, rng) {
    const v = VISIT[type];
    return v.median * pace * Math.exp(v.sigma * randn(rng));
  }

  /* Tốc độ hôm nay = tổng thời gian thực / tổng thời gian "bình thường" của tối đa 8 lượt gần nhất,
     co về 1 với trọng số m (tránh phản ứng quá đà khi mới có 1–2 lượt). */
  function estimatePace(done, m = 3) {
    const recent = done.slice(-8);
    if (!recent.length) return 1;
    const ratio = recent.reduce((s, d) => s + d.actual, 0) /
                  recent.reduce((s, d) => s + VISIT[d.type].median, 0);
    const k = recent.length;
    return (k * ratio + m) / (k + m);
  }
  /* Độ bất định của tốc độ: ít lượt đã khám → không chắc → khoảng rộng hơn.
     0.2 ≈ độ dao động tốc độ giữa các ngày (giả định, cần đo từ dữ liệu viện). */
  function paceSd(doneCount, m = 3, between = 0.2) {
    const k = Math.min(8, doneCount);
    return between * Math.sqrt(m / (k + m)) + 0.05;
  }

  /* ahead: mảng loại lượt của những người đang chờ trước mình
     inService: loại lượt của người đang ở trong phòng (hoặc null), elapsed: đã vào được bao nhiêu phút
     pause: số phút bác sĩ tạm vắng đã biết */
  function predictWait({ ahead = [], inService = null, elapsed = 0, pace = 1, paceSd: ps = 0, pause = 0,
                         n = 800, lo = 0.1, hi = 0.9, seed = 7 }) {
    const rng = mulberry32(seed);
    const xs = new Array(n);
    for (let i0 = 0; i0 < n; i0++) {
      const pace_i = pace * Math.exp(ps * randn(rng));  // mỗi lần mô phỏng bốc một "tốc độ hôm nay" khả dĩ
      let t = pause;
      if (inService) {
        // thời gian còn lại của người đang khám, có điều kiện là đã khám được `elapsed` phút
        let s, tries = 0;
        do { s = drawService(inService, pace_i, rng); } while (s < elapsed && ++tries < 30);
        t += Math.max(0.5, s - elapsed);
      }
      for (const ty of ahead) t += drawService(ty, pace_i, rng);
      xs[i0] = t;
    }
    xs.sort((a, b) => a - b);
    const q = p => xs[Math.min(n - 1, Math.floor(p * n))];
    return { lo: q(lo), mid: q(0.5), hi: q(hi) };
  }

  /* Hiển thị: làm tròn ra ngoài theo bội 5 phút */
  function displayRange(r) {
    const a = Math.max(0, Math.floor(r.lo / 5) * 5);
    const b = Math.max(a + 5, Math.ceil(r.hi / 5) * 5);
    return [a, b];
  }

  const api = { VISIT, mulberry32, randn, drawService, estimatePace, paceSd, predictWait, displayRange };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.WaitModel = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
