"""Tạo bản deploy công khai của prototype (bỏ tên/slogan thương hiệu, nhấn mạnh dữ liệu giả).
Chạy: python build-deploy.py <thư mục đích>"""
import sys, shutil, pathlib
src = pathlib.Path(__file__).parent
out = pathlib.Path(sys.argv[1]); out.mkdir(parents=True, exist_ok=True)
html = (src / "index.html").read_text(encoding="utf-8")
REPL = [
    ('<h1 style="margin-top:18px">MyVinmec</h1>', '<h1 style="margin-top:18px">Chờ khám+</h1>'),
    ('<p>Chăm sóc bằng tài năng, y đức và sự thấu cảm</p>', '<p>Bản thử nghiệm của sinh viên · dữ liệu giả lập</p>'),
    ('Đặt theo quyền lợi CBNV Vingroup và người thân CBNV.', 'Đặt theo quyền lợi nhân viên (giả lập).'),
    ('"Quyền lợi CBNV Vingroup"', '"Quyền lợi nhân viên"'),
    ('BẢN MÔ PHỎNG · không phải app chính thức', 'BẢN THỬ NGHIỆM · không phải app của bệnh viện nào · KHÔNG nhập thông tin thật'),
    ('Bản demo: hãy dùng <b>thông tin giả</b>.', '<b style="color:#e5484d">KHÔNG nhập thông tin thật</b> – hãy bấm "Điền dữ liệu mẫu".'),
    ('<title>Trợ lý Chờ khám – prototype</title>', '<title>Chờ khám+ – bản thử nghiệm</title>'),
]
for a, b in REPL:
    assert a in html, f"không tìm thấy: {a}"
    html = html.replace(a, b)
html = html.replace("/* header kiểu MyVinmec */", "/* header */")
for bad in ("Vinmec", "Vingroup"):
    assert bad not in html, f"còn sót '{bad}'"
(out / "index.html").write_text(html, encoding="utf-8")
shutil.copy(src / "wait-model.js", out / "wait-model.js")
shutil.copy(src / "sw.js", out / "sw.js")
(out / "README.md").write_text(
    "# Chờ khám+ – bản thử nghiệm\n\nPrototype của sinh viên cho bài tập thiết kế trải nghiệm chờ khám. "
    "Dữ liệu 100% giả lập; không phải ứng dụng của bất kỳ bệnh viện nào; không thu thập dữ liệu "
    "(mọi thứ chỉ nằm trong trình duyệt). Vui lòng không nhập thông tin thật.\n", encoding="utf-8")
print("ok ->", out)
