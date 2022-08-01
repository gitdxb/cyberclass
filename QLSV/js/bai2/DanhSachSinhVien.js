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

/**
 * Tìm kiếm theo tên
 * Input: Từ khoá tìm kiếm (nguyen)
 * 
 * Các bước:
 * tạo biến mảng chứa kết quả tìm thấy
 * + mangTK[sv1, sv2...] => khai báo mặc định var mangTK=[]
 * duyệt mảng
 *      JS: phân biệt chữ hoa và thường của chuỗi string
 *      => không nên dùng so sánh bằng (===)
 *      TK: Nguyen => toLowcaseString() => nguyen
 *      Tên: NGUYEN van b => toLowcaseString() => nguyen van b
 * 
 *      "nguyen" === "nguyen van b" => ko tìm thấy do JS so sánh cả 1 cụm chuỗi ký tự
 *      => indexOf() => tìm trong tên SV có chứa từ khoá tìm kiếm không
 *      => có chứa thì trả về vị trí tìm thấy
 *      if tuKhoa === sv.tenSV
 *            lưu sv tìm thấy vào mangTK
 * 
 * tra kết quả mảng ra khỏi hàm
 * 
 * Output: Các sinh viên có tên chứa từ khoá tìm kiếm
 * (Nguyên Văn A, Tran Nguyen, Nguyen Van B)
 */

// Khai báo phương thức tìm kiếm
// Prototype - ES5 => tạo thuộc tính và phương thức mà không cần chỉnh sửa lớp

DanhSachSinhVien.prototype.timKiem = function(tuKhoa) {
    var mangTK = [];
    var tuKhoaThuong = tuKhoa.toLowerCase();
    this.mangSV.map(function(sv){
        var tenSVThuong = sv.tenSV.toLowerCase();
        var viTriTK = tenSVThuong.indexOf(tuKhoaThuong);
        if(viTriTK > -1) {
            // tìm thấy
            mangTK.push(sv);
        }
    });
    return mangTK;
}