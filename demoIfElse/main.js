/**
 * + Các câu lệnh kiểm tra điều kiện
 *      chỉ có 1 hành động
 *      có 2 hành động
 *      có nhiều hành động
 * + Toán tử so sánh
 * 
 * 
 */

// Toán tử so sánh (kiểu boolean => true/false)
// So sánh bằng (==) 
console.log("so sánh bằng");
console.log(5 == 5);
console.log(5 == 6);

// Lớn hơn, bé hơn
console.log("So sánh lớn hơn, bé hơn")
console.log(5 < 5);
console.log(5 > 6);
console.log(6 >=6);

// So sánh không bằng
console.log("so sánh không bằng")
console.log(5 != 5);
console.log(5 != 6);

// phép toán so sánh logic (so sánh nhiều biểu thức)
// && (và), || (hoặc)

var dtb = 9.5;
// cả 2 điều kiện true thì mới true
console.log("Toán tử &&");
console.log(dtb >= 9 && dtb <= 10);

console.log("Toán tử ||");
// true || false => true
// false || false => false
// điểm bé hơn bằng 9 và điểm lớn hơn bằng 10 => true
console.log(dtb <= 9 || dtb >= 10); //false

/**
 * Demo chuyển đổi số âm sang số dương
 * Khối 1: Input
 * số var d
 * 
 * Khối 2: các bc xử lý
 * kiểm tra số d là âm hay dương
 * 
 * d < 0 => nếu d là số âm => chuyển sang số dương
 * 
 * thông báo số d
 * 
 * Khối 3: output
 * số dương d
 */

var d = -1;

// Kiểm tra
if(d < 0) {
    d = Math.abs(d);
}
console.log("Số d:" + d);

/**
 * Tính tiền phạt tín dụng
 * 
 * Khối 2: 
 * conNo = tienPhaiTra - tienDaTra
 * neu conNo > 0 thì bị phạt
 * tienPhat = conNo * 1.5 / 100
 * 
 * Thông báo tiền phạt
 */

var tienPhaiTra = 5000000;
var tienDaTra = 3000000;

var conNo = tienPhaiTra - tienDaTra;

if(conNo > 0) {
    var tienPhat = conNo * 1.5 / 100;
}

console.log("Bị phạt: "  + tienPhat.toLocaleString());

/**
 * Demo tính tiền lương
 * Khối 1: Input
 * gio, tienMoiGio, heSo
 * 
 * Khối 2:
 * Nếu ko làm OT
 *      tienLuong = gio * tienMoiGio
 * Nếu OT
 *      tienLuong = (gio * tienMoiGio) + gio - 
 * 
 * Khối 3:
 * tienLuong
 */
var gio = 41;
var tienMoiGio = 50000;
var heSo = 1.5;
var tienLuong = 0;
if(gio <= 40) {
    tienLuong = 40 * tienMoiGio;
} else {
    tienLuong = (40 * tienMoiGio) + (gio-40) * tienMoiGio * heSo;
}
console.log("Lương 1 tuần: " + tienLuong.toLocaleString());

/**
 * ĐK nhiều hành động
 * Tính tiền khuyến mại
 * Khối 1: soLuong, donGia
 * 
 * Khối 2:
 * Nếu 0 < soLuong < 50
 *      tienThanhToan = soLuong * donGia
 * Neu 100 >= soLuong >= 50 (8%) => 100 - 8 => 92%
 *      tienThanhToan = (soLuong * donGia) * 0.92
 * Neu soLuong < 100: 
 *      tienThanhToan = (soLuong * donGia) * 0.88
 * Ngược lại:
 *      Thông báo lỗi
 * 
 * 
 * Khối 3:
 * tienThanhToan
 */

var soLuong = 10;
var donGia = 10000;
var tienThanhToan = 0;

if(0 < soLuong && soLuong < 50) {
    tienThanhToan = soLuong * donGia;
} else if(50 < soLuong && soLuong <= 100) {
    tienThanhToan = (soLuong * donGia) * 0.92;
} else if(soLuong > 100) {
    tienThanhToan = (soLuong * donGia) * 0.88;
} else {
    alert("Sai rồi! Nhập lại đi!");
}
console.log("Tong tien: " + tienThanhToan);