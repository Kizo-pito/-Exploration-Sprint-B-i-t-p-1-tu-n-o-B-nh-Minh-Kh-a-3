# Một lần đi khám: khoảnh khắc **Chờ tại viện**

Bài tập 1 tuần, Exploration Sprint Vinmec × VinUni VRIC (K1–K3). Tác giả: *[Đào Bình Minh – Khóa 3]*.

> **Tóm tắt.** Mình hỏi 5 người thân và bạn bè về lần đi khám gần nhất. Điểm đau rõ nhất không chỉ là *chờ lâu*, mà là *không biết còn phải chờ bao lâu*. Vì không biết, người bệnh không dám rời chỗ, có khi phải đứng hàng giờ. MyVinmec hiện giúp đặt lịch, nhưng khi người bệnh đã đến viện thì app không còn đi cùng họ. Prototype "**Hôm nay tại viện**" cho người bệnh biết: còn mấy người, khoảng bao nhiêu phút, vì sao lâu, rời chỗ X phút có kịp không, bước tiếp theo đi đâu. App tự báo khi còn 2 người. Con số do một mô hình thống kê tính; phần an toàn do luật cố định đảm nhiệm; AI (GPT‑4o) chỉ hiểu câu hỏi tự do và diễn đạt lại.

## Mục lục

| Thư mục / file | Nội dung |
|---|---|
| [01-phong-van/](01-phong-van/) | [Bộ câu hỏi](01-phong-van/interview-guide.md) · [Ghi chép P1–P5](01-phong-van/ghi-chep-phong-van.md) · [Tổng hợp insight](01-phong-van/tong-hop-insight.md) · [Dữ liệu ẩn danh (CSV)](01-phong-van/khao-sat-an-danh.csv) · [Dùng thử MyVinmec](01-phong-van/myvinmec-dung-thu.md) |
| [02-journey-map/](02-journey-map/README.md) | Hành trình 8 chặng, đường cảm xúc, điểm đau PP1–PP5 |
| [03-need-statement/](03-need-statement/README.md) | Need statement theo mẫu Biodesign, bằng chứng, chỉ số đo, các phiên bản đã loại |
| [04-best-practice/](04-best-practice/README.md) | SingHealth · Shanghai Children's Hospital · HUG Genève · Maister, kèm bài học cho Vinmec |
| [05-prototype/](05-prototype/README.md) | [Prototype (mở `index.html`)](05-prototype/index.html) · [Dữ liệu và mô hình ước tính](05-prototype/nguon-du-lieu-uoc-tinh.md) · [Prompt](05-prototype/prompts.md) · [Log thử nghiệm](05-prototype/log-thu-nghiem.md) |
| [06-rui-ro-dao-duc/](06-rui-ro-dao-duc/README.md) | 10 rủi ro và cách giảm thiểu, đường chuyển tuyến khẩn cấp |
| [07-coach-plan/](07-coach-plan/README.md) | Một trang: mình sẽ coach nhóm K4 làm bài này thế nào |
| [slides.pdf](slides.pdf) | 10 slide để present (nguồn: [slides-src/](slides-src/slides.html)) |

---

## 1. Phỏng vấn

- **Phương thức:** phỏng vấn có cấu trúc 50 câu, phủ cả 5 khoảnh khắc: đặt lịch, check-in, chờ, nhận kết quả, tái khám. Hỏi rộng trước để việc chọn khoảnh khắc dựa trên dữ liệu. Tác giả trực tiếp hỏi (có người khác cùng hỏi một phần) và ghi câu trả lời vào form, xuất thành file xlsx. Bộ câu hỏi do AI soạn bản đầu dựa trên mẫu có sẵn, tác giả chỉnh lại.
- **Người được phỏng vấn:** 5 **người thân trong gia đình** (P1–P5): 4 người 45–60 tuổi, 1 người 18–30 tuổi. Tất cả tự đi khám cho mình, chủ yếu ở BV công và phòng khám tư.
- **Đạo đức:** câu đầu tiên xin đồng ý (5/5 đồng ý); chỉ hỏi về trải nghiệm dịch vụ; không hỏi chẩn đoán; không ghi âm, không chụp ảnh. Email/Zalo người tham gia để lại đã bị xoá bằng script trước khi đưa vào repo.
- **Dùng thử MyVinmec:** tác giả tự dùng và chụp 3 màn hình (Trang chủ, Lịch hẹn, Đặt lịch hẹn). Ảnh không đưa vào repo vì có SĐT thật.

## 2. Vì sao chọn khoảnh khắc "Chờ"

| Tín hiệu | Đếm |
|---|---|
| Gọi tên chờ đợi là bước lâu hoặc khó chịu nhất | **4/5** |
| Không biết ước tính còn bao lâu đến lượt | **4/5** |
| Có lúc không dám rời chỗ vì sợ lỡ lượt | **4/5** |
| Đã có hẹn mà vẫn chờ thủ tục lâu | **4/4** người có hẹn |
| Không ai báo bước tiếp theo (hoặc chỉ báo khi khám xong) | 3/5 |
| Chưa từng đặt lịch qua app | 5/5 |

Tái khám cũng có tín hiệu 4/5, nhưng lý do bỏ tái khám mà P1 và P3 đưa ra lại chính là "mất thời gian chờ đợi". Chờ là gốc, tái khám là hệ quả.

## 3. Insight chính

1. **Khổ vì không biết, không chỉ vì lâu.** "Có nhưng k biết chính xác bao nhiêu thời gian" (P2). Điều này khớp với Maister (1985): chờ không biết trước cảm thấy dài hơn chờ có thời hạn rõ.
2. **Sợ lỡ lượt nên phải "giữ ghế".** "Thấy mệt mỏi khi chờ vì bệnh viện quá tải k có chỗ ngồi" (P4).
3. **Nhiều chặng chờ, không ai cho thấy toàn cảnh.** P2 tự khai tổng thời gian chờ khoảng 3h40 qua 3 chặng.
4. **Đặt hẹn trước không giúp chờ ít hơn.** "Nếu đã có giấy hẹn thì đc vào phòng khám luôn" (P2).
5. **Người bệnh chấp nhận AI *thông báo*, không chấp nhận AI *quyết định y khoa*.** "yên tâm đặt lịch và thông báo / không yên tâm khi nó kê đơn thuốc" (P3).
6. **Lúc chờ, người bệnh tự tra cứu bệnh trên mạng (P5).** Nếu thêm chatbot mà không có rào chắn, chatbot sẽ thành công cụ tự chẩn đoán.

## 4. Need statement (Biodesign)

> **Cách để giảm sự bất định trong lúc chờ** cho **người bệnh trung niên đến khám ngoại trú trực tiếp**, những người **không biết còn bao lâu đến lượt và bước tiếp theo là gì, nên phải ngồi bám chỗ hàng giờ vì sợ lỡ lượt**.

Câu này không nêu giải pháp. Outcome là *giảm bất định*, không phải *giảm số phút chờ*, vì số bác sĩ và số phòng nằm ngoài tầm với của nhóm, còn thông tin thì làm được ngay.

## 5. Best practice quốc tế

| Nơi | Họ làm gì | Bài học cho Vinmec |
|---|---|---|
| **SingHealth (Singapore), Q Track** | Đăng ký trên app trước giờ hẹn 60–90 phút; xem còn bao nhiêu người và trạm tiếp theo; cập nhật 5 phút/lần; không ưu tiên người dùng app | Hiện "còn N người" + bước tiếp theo; công bằng với người không dùng app |
| **Shanghai Children's Hospital, WeChat** | Báo trước 15 phút; thời gian chờ trung bình 126 → 33 phút (so sánh trước–sau); chỉ ~18% người bệnh dùng | Đặt vào kênh người bệnh đã dùng sẵn; tỉ lệ người dùng là nút thắt; không hứa trước con số |
| **HUG Genève, SMS gọi lại** | Ca nhẹ được rời khu chờ, SMS gọi quay lại, nhắc 20 phút/lần, tối đa 4 lần; 97% hài lòng; loại trừ ca nặng | Cho phép rời chỗ kèm cam kết gọi lại; tiêu chí loại trừ là tính năng an toàn |

## 6. Prototype

**Chạy:** mở [`05-prototype/index.html`](05-prototype/index.html) bằng Chrome hoặc Edge. Để có thông báo hệ thống: chạy `python -m http.server 5173` trong thư mục rồi mở `http://localhost:5173`. Bản công khai để người thử dùng trên điện thoại được tạo bằng `python 05-prototype/build-deploy.py <thư mục>`; bản này bỏ tên thương hiệu và ghi rõ "không nhập thông tin thật".

**Luồng:** Trang chủ (phong cách MyVinmec) → **Đặt lịch** (đủ trường, tự lưu bản nháp) → Lịch hẹn → **Check-in** → **Hôm nay tại viện** → Hỏi trợ lý / Thông báo.

| Tính năng | Giải quyết | Cách làm |
|---|---|---|
| "Còn N người · khoảng A–B phút · dự kiến đến lượt khoảng HH:MM–HH:MM" + lý do | PP2: không biết bao lâu | Mô hình thống kê |
| Đồng hồ chạy theo giờ thật; báo khi còn 2 người, khi đến lượt, khi có kết quả (thông báo hệ thống, âm thanh, rung) | PP3: không dám rời chỗ | Quy tắc |
| "Rời chỗ 10/20/30 phút có kịp không?" | PP3 | Quy tắc: chỉ nói "kịp" khi còn dư ≥ 10 phút |
| Thanh hành trình nhiều chặng; bước sau khám hiện ra khi bác sĩ chỉ định | PP4: không biết đi đâu tiếp | Quy tắc |
| Form đặt lịch tự lưu bản nháp | P2 từng mất thông tin vừa khai | Quy tắc |
| Trợ lý chat, có dòng trạng thái trực tiếp; tin cũ tự gắn nhãn "ĐÃ CŨ" | Câu hỏi tự do khi chờ | **AI (GPT‑4o hoặc Claude)**; không có key thì dùng luật cố định |
| Nút "Tôi thấy không khoẻ"; phát hiện từ khoá nguy hiểm và triệu chứng | An toàn | **Quy tắc, chạy trước AI** |

**Ước tính thế nào khi mỗi người khám lâu khác nhau?** ([chi tiết](05-prototype/nguon-du-lieu-uoc-tinh.md))
- Thời gian theo **loại lượt** của từng người phía trước (khám mới / tái khám / đọc kết quả).
- Cộng với **tốc độ thực tế của phòng hôm nay**, học từ 8 lượt gần nhất.
- Mô phỏng 800 lần rồi lấy **khoảng P10–P90**.

Backtest trên 37.000 dự đoán giả lập:

| Cách ước tính | Sai số trung bình | Thời gian thật nằm trong khoảng hiển thị |
|---|---|---|
| Số người × 7 phút | 10,2 phút | – |
| Mô hình | **7,1 phút** | **83%** |

Bản đầu của mô hình chỉ đúng 71% vì quá tự tin; đã sửa bằng cách thêm độ bất định của tốc độ. Giới hạn: dữ liệu giả lập sinh từ chính giả định của mô hình, nên cần chạy lại trên log thật của viện.

**AI lấy thông tin từ đâu?** AI không có dữ liệu riêng. Mỗi câu hỏi, app gửi kèm ảnh chụp trạng thái hàng chờ (không có tên, chẩn đoán hay kết quả). Mọi con số và quyết định "kịp / không kịp" đều do code tính sẵn; AI chỉ diễn đạt lại.

## 7. Thử nghiệm và những gì đã sửa

Chi tiết ở [log-thu-nghiem.md](05-prototype/log-thu-nghiem.md).

- **Kiểm tra tự động** trong Chrome headless: chạy hết luồng 6 chặng; mỗi phút so câu trả lời của trợ lý với trạng thái thật (182 lần, 0 sai).
- **Red-team R1–R9**, chế độ không AI:
  - "Tôi hơi mệt" chưa được hướng tới nhân viên → thêm nhánh triệu chứng nhẹ chạy trước AI.
  - Xin chen lượt thì trả lời chung chung → thêm luật trả lời rõ.
  - Hỏi phòng không có dữ liệu → trả lời rõ "em chưa có thông tin này".
  - **Log lưu nguyên SĐT** người dùng gõ vào → thêm bước che SĐT và email.
- **GPT‑4o, vòng 1:** AI nói "rời 30 phút → không nên", ngược với nút "Rời chỗ"; và xác nhận "đã xong xét nghiệm" dù dữ liệu không có. Sửa: code tính sẵn số phút được rời tối đa, thêm quy tắc "chỉ khẳng định những gì có trong dữ liệu". **Vòng 2:** cả 5 câu "rời chỗ" đều khớp với luật.
- **So với luật cố định:** với 7 câu viết kiểu người dùng thật ("bao h toi luot", "hút thuốc 15 phút"…), luật cố định đỡ được 1/7, GPT‑4o đỡ được 7/7.
- **Tác giả tự thử** (log `log-T_.json`, `log-T_2.json`):
  - Đã đến lượt mà chat vẫn hiện "còn 5 người" → thêm dòng trạng thái trực tiếp và nhãn "ĐÃ CŨ".
  - Khám xong không nhận ra đã sang bước lấy máu → câu trả lời mở đầu bằng "Bước hiện tại: …".
  - "Khám xong đi đâu tiếp?" bỏ qua bước đang chờ → đã sửa.
- **Thử với 2–3 người dùng:** kịch bản 15 phút và bảng ghi ở [log-thu-nghiem.md](05-prototype/log-thu-nghiem.md).

## 8. Rủi ro an toàn và đạo đức (tóm tắt)

- **Ca nặng vẫn ngồi chờ:** từ khoá nguy hiểm và nút "Tôi thấy không khoẻ" dẫn tới thẻ đỏ và gọi điều dưỡng. Phần này **không phụ thuộc AI**; nguyên tắc là thà báo nhầm còn hơn bỏ sót.
- **AI tư vấn y khoa:** AI từ chối, và không được nhận kết quả hay chẩn đoán nên không có gì để diễn giải.
- **Ước tính sai, người bệnh lỡ lượt:** luôn hiện khoảng; loa và bảng gọi số là chuẩn. Bản thật cần chính sách giữ lượt và gửi push từ máy chủ.
- **Lộ dữ liệu, lừa đảo** (4/5 người lo): thu tối thiểu dữ liệu; chỉ dùng kênh chính thức; không bao giờ gửi link thanh toán.
- **Bất bình đẳng số:** dùng app không được ưu tiên; vẫn giữ bảng gọi số và loa.

## 9. Coach nhóm K4 (tóm tắt)

Theo đúng 3 nhiệm vụ của Vai 2 (chi tiết ở [07-coach-plan](07-coach-plan/README.md)):

- **Mốc:**
  - Chia 5–10 bạn thành 3–5 cặp, theo dõi trên một bảng chung có đèn 🟢🟡🔴.
  - Lịch 6 tuần bám đúng checkpoint thứ Sáu, Cổng 1, rà soát giữa kỳ, Cổng 2, Demo Day.
  - Đèn 🔴 thì báo mentor từ thứ Năm, trước checkpoint.
- **Báo cáo:**
  - Báo cáo tuần theo mẫu 5 dòng; report sau mỗi vòng thử người dùng đủ 4 phần.
  - Nhắc trễ theo nấc: trễ 12 giờ nhắn riêng, 24 giờ gọi điện, trễ lần 2 báo mentor.
  - Tối thứ Sáu gửi mentor 1 trang tổng hợp.
- **Đào tạo:**
  - Quan sát, phỏng vấn, need statement, prototype; mỗi kỹ năng theo 3 bước: làm mẫu → làm cùng → tự làm.
  - Khi nhóm kẹt, mình hỏi chứ không làm hộ.
- **4 cổng chất lượng:** dữ liệu là thật (không phải AI viết) · chỉ lấy hoàn cảnh, không lấy thông tin cá nhân · need statement đạt chuẩn · prototype an toàn.

## 10. Giới hạn

- Mẫu nhỏ (5 người, đều là người thân) và lệch tuổi (4/5 người 45–60 tuổi); chưa ai là bệnh nhân Vinmec. Đây là giả định cần kiểm chứng ở Tuần 1 của sprint.
- Câu trả lời được ghi tóm tắt nên khá ngắn; một số câu bị bỏ trống hoặc trả lời "Không".
- Prototype chạy 100% trên dữ liệu tự mô phỏng; thời gian khám theo loại lượt là số giả định.

## 11. Phần nào do AI tạo

Tác giả là người chịu trách nhiệm cuối cùng với mọi nội dung.

| Phần | Tác giả | AI |
|---|---|---|
| **Bộ câu hỏi phỏng vấn** (50 câu) | Chọn, chỉnh và chốt bộ câu hỏi | AI soạn bản đầu, dựa trên mẫu câu hỏi có sẵn |
| Dùng thử MyVinmec, chụp màn hình, quan sát chính | ✅ Tự làm | Claude Code ghi lại mô tả màn hình từ ảnh chụp |
| Chọn khoảnh khắc, chốt need statement | ✅ Quyết định cuối | Claude Code đếm tín hiệu, đề xuất bản nháp |
| Ghi chép P1–P5, tổng hợp insight, journey map | Rà soát | Claude Code soạn từ dữ liệu phỏng vấn của tác giả; trích dẫn giữ nguyên văn |
| Best practice | Rà soát | Claude Code tìm nguồn và tóm tắt; số liệu đã đối chiếu với trang gốc |
| Prototype, mô hình ước tính, backtest, kiểm tra tự động | Đặt yêu cầu và hướng sửa: style MyVinmec, làm cụ thể đặt lịch, "bot lấy thông tin từ đâu", "mỗi người khám lâu khác nhau", đồng hồ thật, báo khi còn 2 người, các lỗi tự thử phát hiện | Claude Code viết code |
| **AI bên trong sản phẩm:** trợ lý chat | Chọn model (GPT‑4o), chạy thử bằng key của tác giả | Câu trả lời do GPT‑4o hoặc Claude sinh ra từ dữ liệu hàng chờ giả lập |
| Rủi ro, coach plan, slides, hình minh hoạ slide 6 | Rà soát, sửa nội dung | Claude Code soạn bản nháp và vẽ hình |


Ẩn danh: file xlsx gốc không có trong repo (xem [.gitignore](.gitignore)); không có API key nào trong repo.
