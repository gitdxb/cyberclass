/**
 * + Lưu trữ nhiều đối tượng sv (mảng sinh ziên)
 * + Thêm SV (thêm phần tử mới cho mảng)
 * + Xóa, sửa
 */
function DanhSachSinhVien() {
    // thuộc tính
    // mảng các đối tượng sinh viên
    this.mangSV = [];

    //phương thức
    // truyền tham số là đối tượng sv
    this.themSV = function (sv) {
        this.mangSV.push(sv);
    }
}