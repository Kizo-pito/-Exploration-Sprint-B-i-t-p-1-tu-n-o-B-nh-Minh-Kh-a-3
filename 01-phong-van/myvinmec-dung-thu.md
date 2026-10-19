# Ghi chép dùng thử MyVinmec

- Ngày dùng thử: 19/10/2026 (ảnh chụp lúc 17:43)
- Nguồn: tác giả tự dùng app và chụp 3 màn hình: Trang chủ, Lịch hẹn, Đặt lịch hẹn. Ảnh **không đưa vào repo** vì có số điện thoại thật của tác giả.
- Mục tiêu: hiểu app đồng hành với người bệnh tới đâu trong hành trình, đặc biệt ở **khoảnh khắc chờ tại viện**.

> Phần mô tả màn hình do AI ghi lại từ ảnh chụp của tác giả. Các dòng có ✍️ là chỗ tác giả cần bổ sung cảm nhận khi tự thao tác.

## Quan sát chính của tác giả

> MyVinmec hiện chủ yếu có **đặt lịch**: đặt xong, đến giờ thì đi khám. Mình **không thấy** tính năng nào cho biết khi đã ở viện thì còn bao lâu đến lượt hay bước tiếp theo là gì, và cũng không có trợ lý (bot) cho lúc chờ.

## Nhật ký thao tác

| # | Mình làm gì | Mình thấy gì | Vướng ở đâu / nhận xét |
|---|---|---|---|
| 1 | Mở app, xem **Trang chủ** | Header "MyVinmec – Chăm sóc bằng tài năng, y đức và sự thấu cảm". Banner khuyến mãi tiêm phòng cúm. Lưới 12 dịch vụ: Lịch hẹn, Liên hệ, Dịch vụ y tế *(Mới)*, Sổ tiêm, Đơn thuốc, Danh mục giá & quyền lợi, Quyền lợi CBNV Vingroup *(Mới)*, Cộng đồng hỏi đáp bác sĩ, Cẩm nang làm mẹ, Nhắc lịch uống thuốc, Tạm ứng viện phí, Tất cả dịch vụ. Mục "Dịch vụ mới": Cổng dịch vụ khách hàng; Đặt lịch nhanh – Xác nhận lịch tự động. Thanh dưới: Trang chủ · Hồ sơ · **Đặt lịch** (nút tròn giữa) · Thông báo (7) · Tài khoản | Trong 12 ô **không có ô nào cho "ngày khám / đang ở viện"**. Các ô thiên về trước khám (đặt lịch, giá) và sau khám (đơn thuốc, sổ tiêm). ✍️ |
| 2 | Vào **Lịch hẹn** (chưa có lịch) | "Hiện tại bạn chưa có lịch hẹn nào" + nút ĐẶT HẸN. Ghi chú: *nếu đã nhận SMS xác nhận đặt hẹn từ BV mà không thấy lịch ở đây* thì (1) kiểm tra đã kết nối hồ sơ y tế chưa, (2) kiểm tra thông tin đặt lịch và hồ sơ cá nhân có chính xác không, (3) gọi hotline CSKH | Bản thân app đã thừa nhận lịch hẹn **có thể không đồng bộ** giữa các kênh. Điều này khớp với P1 ("Hãy lưu kết quả và đồng bộ") và P2 (mất thông tin vừa khai). ✍️ |
| 3 | Bấm **Đặt lịch** | Form "Đặt lịch hẹn": Chọn Khách hàng (Tôi / + Thêm) → Thông tin người đặt lịch: Họ và tên*, Ngày sinh*, Số điện thoại* (đã điền sẵn), Giới tính* (Nam/Nữ); 2 ô tick: đặt theo quyền lợi CBNV Vingroup, đặt cho người nước ngoài → Thông tin đặt hẹn: Chọn địa điểm* → Lịch hẹn: Ngày khám mong muốn* (dải ngày "Thg 10") | Đã đăng nhập nhưng **họ tên và ngày sinh vẫn để trống**, phải tự nhập lại; chỉ SĐT được điền sẵn. Khớp P3: "phải khai lại thông tin". ✍️ Phần sau "Ngày khám" (chọn chuyên khoa, bác sĩ, giờ) chưa chụp |
| 4 | Tìm thông tin "ngày khám": cần mang gì, đến đâu, check-in thế nào | Không thấy trong 3 màn hình đã chụp | ✍️ |
| 5 | Tìm số thứ tự, trạng thái hàng chờ, thông báo gọi lượt | **Không thấy** ô hay mục nào | Đây là khoảng trống mà prototype nhắm vào |
| 6 | Tìm kênh hỏi đáp | Có "Liên hệ", "Cộng đồng hỏi đáp bác sĩ", "Cổng dịch vụ khách hàng", hotline | Đều là kênh chung, **không** gắn với lượt khám đang diễn ra. ✍️ |

## Đối chiếu với insight

| Insight | App hiện có đáp ứng không? | Ghi chú |
|---|---|---|
| I1: biết còn bao lâu đến lượt | ❌ Không thấy | Khoảng trống chính |
| I3: thấy bước tiếp theo trong ngày | ❌ Không thấy | |
| I4: đặt hẹn rồi thì vào nhanh hơn | ⚠️ Có "Đặt lịch nhanh – Xác nhận lịch tự động" nhưng không thấy bước check-in hay theo dõi sau khi đến viện | |
| I5: kênh chính thức, chống lừa đảo | ✅ Có sẵn mục **Thông báo** trong app (badge 7) | Kênh để gửi "còn 2 người / đến lượt" mà không cần SMS có link |
| Nhắc việc | ✅ Đã có "Nhắc lịch uống thuốc" | Người dùng đã quen kiểu nhắc việc → mở rộng sang nhắc lượt khám |

## Điều mang vào prototype

1. Giữ đúng ngôn ngữ thiết kế (header teal, lưới ô tròn, nút Đặt lịch ở giữa, tiêu đề mục có vạch cam) để người dùng hiện tại thấy quen.
2. Thêm **một ô "Hôm nay tại viện"** vào lưới và nút **Check-in** trong Lịch hẹn, thay vì làm một app riêng.
3. Gửi thông báo qua mục **Thông báo** sẵn có.
4. Form đặt lịch **tự lưu bản nháp** (P2), và *(bản thật)* điền sẵn thông tin hồ sơ đã có (P3).
