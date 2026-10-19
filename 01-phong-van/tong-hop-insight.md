# Tổng hợp insight

Dữ liệu: 5 khảo sát có cấu trúc (P1–P5), chi tiết ở [ghi-chep-phong-van.md](ghi-chep-phong-van.md). Với n = 5, các con số dưới đây là **tín hiệu để định hướng**, không phải thống kê.

## 1. Bảng đếm theo khoảnh khắc

| Khoảnh khắc | Tín hiệu | Đếm | Ai |
|---|---|---|---|
| **Chờ** | Gọi tên chờ đợi là bước lâu nhất hoặc khó chịu nhất | **4/5** | P1, P2, P3, P4 |
| **Chờ** | Không biết ước tính còn bao lâu đến lượt | **4/5** | P1, P2 ("không chính xác"), P4 ("khi nào đến số"), P5 |
| **Chờ** | Có lúc không dám rời chỗ vì sợ lỡ lượt | **4/5** | P1, P2, P3, P4 |
| **Chờ** | Đến đúng hẹn mà vẫn chờ thủ tục lâu | **4/4** người có hẹn | P1, P2, P3, P4 |
| **Chờ** | Không ai báo bước tiếp theo (hoặc chỉ báo khi khám xong) | 3/5 | P1, P4; P2 (chỉ sau khám) |
| **Chờ** | Mô tả cảm xúc khi chờ là mệt, lâu, lo | 4/5 | P1, P2, P3, P4 |
| Nhận kết quả | Khó hiểu cách trình bày | 3/5 | P1 (tên thuốc), P3, P4 (xét nghiệm máu) |
| Tái khám | Từng quên, lỡ hoặc dời lịch | 4/5 | P1, P3, P4, P5 |
| Đặt lịch | Chưa từng đặt qua app/web | **5/5** | tất cả (P2 thử nhưng thất bại) |
| Kênh số | Lo lộ thông tin hoặc bị lừa đảo | 4/5 | P1, P2, P3, P4 |

**Vì sao chọn "Chờ" chứ không phải "Tái khám" (cũng 4/5)?** Có hai lý do. Thứ nhất, khi được hỏi bước nào khó chịu nhất, chỉ 1 người (P5) chọn tái khám, còn chờ đợi được gọi tên nhiều nhất. Thứ hai, ở tái khám, lý do bỏ khám của P1 và P3 lại chính là *"mất thời gian chờ đợi"*. Chờ là gốc, tái khám là hệ quả.

## 2. Insight

### I1. Điều làm người bệnh khổ không chỉ là chờ lâu, mà là **không biết** phải chờ bao lâu
> "Có nhưng k biết chính xác bao nhiêu thời gian" (P2) · "Khi nào đến số" (P4) · "có ai cách nào báo được không" (P1)

Người bệnh chỉ nhìn thấy số thứ tự, không thấy thời gian. Điều này khớp với nguyên lý *"uncertain waits feel longer than known, finite waits"* (Maister, 1985), xem [04-best-practice](../04-best-practice/README.md).

### I2. Sợ lỡ lượt biến người bệnh thành "người giữ ghế"
> 4/5 người có lúc không dám đi đâu vì sợ lỡ lượt. "đen hơn là phải đứng chờ" (P3) · "quá tải k có chỗ ngồi" (P4)

Vì không biết khi nào đến lượt, người bệnh không dám đi vệ sinh, ăn uống hay ra chỗ thoáng, dù sảnh hết ghế. Thời gian chờ khi đó là thời gian **bị giữ chân**, không dùng được vào việc gì.

### I3. Hành trình có nhiều chặng chờ, nhưng không ai cho người bệnh thấy toàn cảnh
> "Chờ tư vấn, chờ khám, chờ kết quả. Mỗi chỗ khoảng 1h" (P1) · "nội soi, chụp phim, siêu âm, xét nghiệm máu" (P4) · người đi cùng phải "đi đặt số ở những phòng khám khác" (P2)

Mỗi chặng có hàng đợi riêng. Người bệnh không biết mình đang ở chặng mấy trên tổng số bao nhiêu chặng, và chỉ biết bước tiếp theo khi đã xong bước hiện tại.

### I4. Đặt hẹn trước không giúp người bệnh chờ ít hơn
> 4/4 người có hẹn vẫn chờ lâu. "Nếu đã có giấy hẹn thì đc vào phòng khám luôn" (P2)

Giá trị của việc đặt lịch bị mất ngay khi người bệnh tới viện. Đây cũng là chỗ MyVinmec đang dừng lại: app hỗ trợ đặt lịch, nhưng khi người bệnh đã đến viện thì app không còn đi cùng họ (theo quan sát dùng thử của tác giả, xem [myvinmec-dung-thu.md](myvinmec-dung-thu.md)).

### I5. Người bệnh chấp nhận AI **thông báo**, không chấp nhận AI **quyết định y khoa**
> "yên tâm đặt lịch và thông báo / không yên tâm khi nó kê đơn thuốc" (P3) · "Yên tâm có người nhắc nhở" (P1) · "Không" (P4) · "Sợ bị lừa đảo" (P4)

Đây là ranh giới thiết kế: trợ lý chỉ làm hậu cần (thời gian, vị trí, bước tiếp theo) và từ chối mọi câu hỏi chuyên môn. Một người (P4) hoàn toàn không muốn trợ lý, nên giải pháp **không được thay thế** cách gọi số hiện tại mà chỉ bổ sung.

### I6. Thời gian chờ còn bị dùng để tự tra cứu bệnh trên mạng
> "Tìm kiếm thông tin về bệnh mình đang khám trên mạng" (P5) · cảm giác chờ kết quả "lo âu", "lo lắng" (P2, P4)

Đây là một rủi ro: nếu thêm chatbot vào lúc chờ mà không có rào chắn, chatbot sẽ trở thành công cụ tự chẩn đoán.

## 3. Giới hạn của dữ liệu này (cần nói rõ khi trình bày)

1. **Khảo sát tự điền, không phải phỏng vấn sâu.** Câu trả lời ngắn và mình không hỏi lại được "vì sao". Vài câu bị bỏ trống hoặc trả lời "Không".
2. **Mẫu nhỏ và lệch:** 4/5 người 45–60 tuổi, 1 người 18–30. Tất cả tự đi khám cho mình, chưa có góc nhìn của người nhà đưa người già hoặc trẻ em đi khám.
3. **Không ai là bệnh nhân Vinmec.** Phần lớn khám ở BV công. Mức độ quá tải ở Vinmec có thể khác, đây là giả định cần kiểm chứng ở Tuần 1 của sprint.
4. **Thời gian chờ là số tự khai**, có thể bị nhớ dài hơn thực tế. Chính hiện tượng này lại củng cố I1: cảm nhận về thời gian chờ quan trọng ngang con số thật.
5. Một số mâu thuẫn nhỏ (P4 chấm 10/10 nhưng kể nhiều điểm đau; P5 nói chưa dùng chatbot nhưng hỏi "Al"). Mình giữ nguyên dữ liệu, không "sửa cho đẹp".

## 4. Nếu có thêm 1 ngày, mình sẽ hỏi thêm

- "Lần gần nhất anh/chị sợ lỡ lượt, anh/chị đã muốn đi đâu? Mất bao lâu?" (để biết khung thời gian người bệnh cần rời chỗ)
- "Nếu app báo *còn khoảng 20–30 phút*, anh/chị có tin không? Sai bao nhiêu thì anh/chị không tin nữa?" (để định ngưỡng sai số chấp nhận được)
- "Anh/chị muốn được báo qua đâu: app, SMS, Zalo hay loa?" (P4 sợ lừa đảo, nên kênh thông báo ảnh hưởng tới niềm tin)
