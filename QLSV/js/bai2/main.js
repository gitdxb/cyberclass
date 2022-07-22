/**
 * Chứa các hàm xử lý tương tác UI
 */
// Hàm rút gọn cú phát getElementByID
function getELE(id) {
    return document.getElementById(id);
}

// Thêm sinh viên
function themSinhVien() {
    var maSV = getELE('txtMaSV').value;
    var tenSV = getELE('txtTenSV').value;
    var email = getELE('txtEmail').value;
    var password = getELE('txtPass').value;
    var ngaySinh = getELE('txtNgaySinh').value;
    var khoaHoc = getELE('khSV').value;
    var toan = getELE('txtDiemToan').value;
    var ly = getELE('txtDiemLy').value;
    var hoa = getELE('txtDiemHoa').value;
    console.log(maSV, tenSV, email, password, ngaySinh, khoaHoc, toan, ly, hoa);

    // tạo thể hiện của SinhVien
    var sv = new SinhVien(maSV, tenSV, email, password, ngaySinh, khoaHoc, Number(toan), Number(ly), Number(hoa));
    sv.tinhDTB();
    console.log(sv);
}