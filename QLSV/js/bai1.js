var sv2 = {
    id: 'SV002',
    name: 'Nguyen Van A',
    toan: 10,
    van: 9,

    tinhDTB:function () {
        return (this.toan + this.van)/2;
    }
}
console.log(sv2.toan);

// Khi muốn tạo thêm đối tượng sv mới thì phải khai báo lại các thuộc tính + phương thức => tốn nhiều code khai báo
// => Lớp đối tượng (class)
// CHứa các thuộc tính + phương thức chung cho tất cả các đối tượng cùng loại (sinh viên) , vd: Class SinhVien, Class NhanVien, Class SanPham



// Sử dụng lớp đối tượng => tạo thể hiện của lớp (instance)
// var sv3 = new SinhVien('sv003','Đen Thị Giàu', 10, 9);
// console.table(sv3);
// console.log(sv3.tinhDTB());

// var sv4 = new SinhVien('sv004', "Nguyễn Văn Tư", 8, 6);
// console.table(sv4);


// Code thực hành bài luyện 1
/**
 * - Tạo lớp đối tượng SinhVien => Tạo nhanh các đối tượng
 * - Lấy thông tin từ form
 * - Lưu vào thuộc tính của lớp đối tượng
 */
// Khai báo ES5 (function)
function SinhVien(ma, name, diemToan, diemVan, loai) {
    // this: đại diện cho lớp đối tượng SinhVien => truy xuất được các thuộc tính (gọi thuộc tính)
    // thuộc tính
    this.id = ma;
    this.name = name;
    this.toan = diemToan;
    this.van = diemVan;
    this.loaiSV = loai;
    // phương thức
    this.tinhDTB = function() {
        return (this.toan + this.van)/2;
    };

    this.xepLoai = function(dtb){
        if (dtb >= 9 && dtb <= 10) {
            return "Giỏi"
        } else if (7<= dtb && dtb < 9) {
            return 'Khá'
        } else if (0<= dtb && dtb < 7) {
            return "TB"
        } else {
            return 'Chưa xếp loại'
        }
    }
}
function hienThiSinhVien() {
    var ma = document.getElementById('txtMaSV').value;
    var name = document.getElementById('txtTenSV').value;
    var diemToan = Number(document.getElementById('txtDiemToan').value);
    var diemVan = Number(document.getElementById('txtDiemVan').value);
    var loai = document.getElementById('loaiSV').value;

    console.log(ma, name, diemToan, diemVan, loai);

    // tạo thể hiện của lớp
    var sv5 = new SinhVien(ma, name, diemToan, diemVan, loai);
    console.log(sv5);
    console.log(sv5.tinhDTB);

    // var dtb = sv5.tinhDTB();
    // var loaiHL = sv5.xepLoai(dtb);
    // console.log(loaiHL);

    // Callback function: 1 hàm nhận giá trị tham số từ 1 hàm khác
    // Đk dùng: 1 hàm truyền là có return
    // 2- hàm nhận giá trị cần truyền giá trị vào tham số
    var loaiHL = sv5.xepLoai(sv5.tinhDTB());
    console.log(loaiHL);

    document.getElementById('spanTenSV').innerHTML = sv5.name;
    document.getElementById('spanMaSV').innerHTML = sv5.id;
    document.getElementById('spanLoaiSV').innerHTML = sv5.loaiSV;
    document.getElementById('spanDTB').innerHTML = sv5.tinhDTB();
    document.getElementById('spanXepLoai').innerHTML = loaiHL;
}

document.querySelector('.container-fluid .btn').onclick = hienThiSinhVien;