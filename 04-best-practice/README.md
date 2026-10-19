# 3 best practice quốc tế và bài học cho Vinmec

Tiêu chí chọn: (1) giải quyết đúng **bất định khi chờ tại cơ sở y tế**, (2) có nguồn gốc kiểm tra được (trang chính thức hoặc bài báo khoa học), (3) có chi tiết vận hành để học được, không chỉ là quảng cáo.

---

## BP1. SingHealth (Singapore): Health Buddy "Q Track" / Mobile Registration

**Họ làm gì**
- Vào ngày khám, người bệnh tái khám có lịch hẹn nhận SMS mời đăng ký trên app Health Buddy.
- Đăng ký mở trước **60 phút** (poly-clinic, Sengkang General Hospital) hoặc **90 phút** (các BV và trung tâm khác) so với giờ hẹn. Quá giờ hẹn thì không đăng ký được nữa.
- Sau khi đăng ký, người bệnh nhận số thứ tự và phòng khám, xem được **còn bao nhiêu người trước mình** và theo dõi hành trình, gồm cả **trạm tiếp theo**.
- Hàng đợi cập nhật **5 phút một lần**, có nút cập nhật thủ công.
- Đăng ký qua app **không được ưu tiên** hơn người có lịch hẹn sớm hơn. Ai không dùng app thì dùng kiosk tại chỗ hoặc quầy.
- Đang ở dạng thí điểm tại một số phòng khám, chỉ áp dụng cho người bệnh tái khám có hẹn.

**Bài học cho Vinmec**
- Hiển thị **"còn N người trước bạn" + trạm tiếp theo**, cách này an toàn hơn hứa số phút chính xác. Prototype hiển thị cả hai: số người và **khoảng** phút.
- **Không ưu tiên người dùng app** để công bằng với người không dùng app (5/5 người trong khảo sát chưa từng đặt lịch qua app).
- Bắt đầu từ nhóm **có lịch hẹn** (MyVinmec đã có dữ liệu đặt lịch), giống phạm vi thí điểm của SingHealth.

**Nguồn**
- SingHealth, *Register & Track Queue FAQs*: https://www.singhealth.com.sg/patient-services/health-buddy/faqs/register-track-queue-faqs
- SingHealth, *Clinic Queue Updates FAQs*: https://www.singhealth.com.sg/patient-services/health-buddy/faqs/clinic-queue-updates-faqs

---

## BP2. Shanghai Children's Hospital (Trung Quốc): gọi lượt qua WeChat

**Họ làm gì**
- Người bệnh đăng ký khám ngay trong WeChat applet thay vì xếp hàng ở quầy. Applet **báo trước 15 phút** khi sắp đến lượt.
- Thiết kế nghiên cứu: time-motion, so sánh tháng 5–9/2018 (dùng WeChat) với cùng kỳ 2017 (cách truyền thống).

**Kết quả báo cáo**
- Thời gian chờ trung bình giảm từ **126 phút xuống 33 phút**.
- Thời gian nhàn rỗi của điều dưỡng giảm khoảng 24 phút/ngày. Chi phí vận hành mỗi tháng giảm.
- Chờ càng lâu thì nguy cơ xung đột giữa nhân viên y tế và người bệnh càng tăng (OR 2,745).
- Chỉ **8.252/45.740 lượt (~18%)** dùng hệ thống WeChat.
- Hạn chế (tác giả tự nêu): một bệnh viện, một khoa; **không đo mức hài lòng** của từng người bệnh; có thể không áp dụng được cho người ít quen công nghệ.

**Bài học cho Vinmec**
- Nên **đặt thông báo vào kênh người bệnh đã dùng sẵn**. Ở Trung Quốc đó là WeChat; ở Việt Nam có thể là MyVinmec kèm thông báo đẩy, hoặc Zalo OA chính thức. P4 sợ lừa đảo, nên kênh phải là **kênh chính thức đã xác thực**.
- **Tỉ lệ người dùng mới là nút thắt** (18%), nên cần đo adoption ngay từ vòng thử đầu.
- Thiết kế nghiên cứu là so sánh trước–sau ở hai năm khác nhau, nên **không thể quy toàn bộ mức giảm cho app**. Khi đề xuất cho Vinmec không nên hứa con số này.

**Nguồn**
- Wu D, Cui W, Wang X, Huo Y, Yu G, Chen J. *Improvement in outpatient services using the WeChat calling system in the Shanghai Children's Hospital.* Pak J Med Sci. 2021;37(4):993–1000. doi:10.12669/pjms.37.4.4301. https://pmc.ncbi.nlm.nih.gov/articles/PMC8281187/

---

## BP3. Hôpitaux Universitaires de Genève (Thuỵ Sĩ): gọi người bệnh quay lại bằng SMS

**Họ làm gì**
- Ở khoa cấp cứu người lớn, người bệnh mức độ nhẹ (triage 3–4) có thể **rời khu chờ** và được nhắn SMS gọi quay lại ngay trước khi bác sĩ sẵn sàng.
- Điều dưỡng ước tính thời gian chờ. Màn hình cho nhân viên đổi màu cam **20 phút** trước giờ cần gọi. Nếu người bệnh chưa quay lại, hệ thống nhắc **mỗi 20 phút, tối đa 4 tin**. Tin cuối báo người bệnh không còn được giữ chỗ trong hàng nhưng vẫn được khám.
- **Loại trừ**: triage 1–2, dưới 16 tuổi, không nói tiếng Pháp, suy giảm nhận thức, đau nặng, vấn đề thị lực.

**Kết quả báo cáo** (khảo sát cắt ngang, 100 người bệnh và 10 điều dưỡng)
- **97%** hài lòng với dịch vụ gọi lại; **95%** thấy nội dung SMS rõ ràng; khoảng 80% chờ ở căng tin, vườn hoặc phòng thiền thay vì khu chờ.
- 72% **không** thấy căng thẳng khi rời khu chờ.
- Hạn chế (tác giả tự nêu): không có nhóm đối chứng; người tham gia tự nguyện nên có thể lệch về phía hài lòng; bảng hỏi tự thiết kế; một số tác giả nắm sở hữu trí tuệ của hệ thống.

**Bài học cho Vinmec**
- Giải quyết đúng **PP3 (không dám rời chỗ)**: cho phép rời đi kèm **cam kết gọi lại**, có lịch nhắc lặp lại và chính sách rõ ràng khi người bệnh không quay lại kịp.
- **Tiêu chí loại trừ là một tính năng an toàn**. Người bệnh có dấu hiệu nặng không được "chờ ở ngoài". Prototype vì vậy có luồng chuyển khẩn cấp không phụ thuộc AI (xem [06-rui-ro-dao-duc](../06-rui-ro-dao-duc/README.md)).
- Đặt **con người trong vòng lặp**: điều dưỡng quyết định gọi, hệ thống chỉ hỗ trợ.

**Nguồn**
- Ehrler F, Rochat J, Siebert JN, Guessous I, Lovis C, Spechbach H. *Use of a Semiautomatic Text Message System to Improve Satisfaction With Wait Time in the Adult Emergency Department: Cross-sectional Survey Study.* JMIR Med Inform. 2022;10(9):e34488. https://pmc.ncbi.nlm.nih.gov/articles/PMC9490523/

---

## Nền lý thuyết: Maister, "The Psychology of Waiting Lines" (1985)

Trong 8 mệnh đề của Maister, các mệnh đề liên quan trực tiếp tới bài này là: **chờ không biết trước cảm thấy dài hơn chờ có thời hạn rõ**, chờ không được giải thích cảm thấy dài hơn, và lo âu làm thời gian chờ có vẻ dài hơn. Ví dụ quen thuộc của Maister: "Bác sĩ sẽ gặp anh trong 30 phút nữa" dễ chịu hơn "Bác sĩ sẽ gặp anh ngay". Đây là cơ sở để need statement nhắm vào **sự bất định**.
- https://davidmaister.com/articles/1/52/

---

## Tổng hợp: điều mang vào prototype

| Bài học | Từ đâu | Trong prototype |
|---|---|---|
| Hiện "còn N người" và trạm tiếp theo | BP1 | Thẻ trạng thái và thanh hành trình nhiều chặng |
| Báo trước khi tới lượt | BP2, BP3 | "Báo tôi khi còn 2 người" |
| Cho phép rời chỗ và cam kết gọi lại | BP3 | Nút "Tôi muốn đi đâu đó X phút", hệ thống trả lời có kịp hay không |
| Không ưu tiên người dùng app; vẫn giữ quầy và loa | BP1 | Ghi rõ trong thiết kế; app chỉ bổ sung, không thay thế |
| Loại trừ ca nặng, có luồng khẩn cấp | BP3 | Phát hiện từ khoá nguy hiểm và chuyển nhân viên, không qua AI |
| Nói khoảng thời gian thay vì hứa con số | Maister + giới hạn dữ liệu | Hiển thị "18–25 phút" kèm giờ cập nhật |

> Phần tìm kiếm và tóm tắt nguồn có hỗ trợ của AI (Claude). Các con số đã được đối chiếu lại với trang gốc ở link trên.
