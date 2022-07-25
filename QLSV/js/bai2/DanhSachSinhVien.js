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
    this.themSV = function(sv) {
        this.mangSV.push(sv);
    }
    this.timViTri = function(ma){
        // giả sử viTri chưa tìm thấy nên = -1
        var viTri = -1;
        // Duyệt mảng và so sánh mã để tìm sinh viên trong mảng
        this.mangSV.map(function(sv,index){
            if(sv.maSV === ma){
                // tìm thấy
                viTri = index;
            }
        });

        // trả kết quả vị trí tìm thấy ra khỏi hàm để sử dụng ở các hàm khác
        return viTri;
    }
    this.xoaSV = function(ma){
        var viTri = this.timViTri(ma);
        console.log(ma, viTri);

        if(viTri > -1) {
            // tìm thấy
            // splice(vị trí bắt đầu xóa, số lượng phần tử cần xóa tính từ vị trí bắt đầu)
            // splice(1,3) => xóa các phần tử có index 1,2,3
            this.mangSV.splice(viTri,1)
        }
    }
    this.capNhatSV = function(sv){
        var viTri = this.timViTri(sv.maSV);
        if(viTri > -1) {
            // tìm thấy
            dssv.mangSV[viTri] = sv
        }
    }
}