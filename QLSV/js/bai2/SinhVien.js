/**
 * Khai báo lớp đối tượng Sinh Viên
 */

function SinhVien(maSV, tenSV, email, password, ngaySinh, khoaHoc, toan, ly, hoa) {
    //thuộc tính
    this.maSV = maSV;
    this.tenSV = tenSV;
    this.email = email;
    this.password = password;
    this.ngaySinh = ngaySinh;
    this.khoaHoc = khoaHoc;
    this.toan = toan;
    this.ly = ly;
    this.hoa = hoa;
    this.dtb = 0;

    //phương thức
    this.tinhDTB = function() {
        this.dtb (this.toan + this.ly + this.hoa)/3;
    }
}
