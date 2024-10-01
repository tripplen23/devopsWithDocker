**TTY** (viết tắt của "Teletype") ban đầu là thuật ngữ dùng để chỉ các thiết bị đầu cuối từ xa (terminal) kết nối với các máy tính lớn (mainframe) thông qua các đường dây điện thoại. Trong ngữ cảnh hệ điều hành hiện đại, TTY đại diện cho các giao diện dòng lệnh (CLI) và các thiết bị đầu cuối ảo cho phép người dùng tương tác với hệ thống qua bàn phím và màn hình.

## Trong Docker:
Khi chạy một container, bạn có thể sử dụng tùy chọn **-t** để gán một "pseudo-TTY" (thiết bị đầu cuối ảo) cho container. Điều này giúp bạn tương tác với container giống như bạn đang làm việc trên một terminal thông thường.

- Tùy chọn **-t**: Tạo một terminal giả lập (pseudo-TTY) trong container. Điều này cần thiết khi bạn muốn chạy các ứng dụng yêu cầu giao diện người dùng dòng lệnh hoặc chạy lệnh mà đầu ra cần hiển thị dưới dạng có định dạng, giống như khi bạn sử dụng terminal thật.

- Tùy chọn **-i**: Kết hợp với **-t**, cờ **-i** (interactive) giữ cho session tương tác mở, cho phép bạn nhập và nhận phản hồi từ container.

Ví dụ về docker run với **-it**:
Giả sử bạn muốn chạy một container Ubuntu và truy cập shell của nó:

```
docker run -it ubuntu bash
```

- **-i**: Giữ kết nối đầu vào tương tác.
- **-t**: Cung cấp một TTY giả để tương tác.