/**
 * 
 * ?khoi 1: Input
 * tenPhim
 * soVeNguoiLon
 * soVeTreEm
 * tienVeNL
 * tienVeTE
 * phanTramTT (phan tram tu thien)
 * 
 * 
 * 
 * ?Khoi 2: cac buoc xu ly
 * B1: Khai bao va gan tri cho bien
 * B2: Lap cong thuc tinh
 * tongVe = soVeNguoiLon + soVeTreEm
 * doanhThu = (soVeNguoiLon * tienVeNL) + (tienVeTE * soVeTreEm)
 * tienTuThien = doanhThu * phanTramTT/100
 * tienConLai = doanhThu - tienTuThien
 * B3: In ket qua o consolelog
 * 
 * 
 * ?Khoi 3: Output
 * doanhThu
 * tienTuThien
 * tienConLai
 * 
 */

// B1:
var tenPhim = "Em va Trinh";
var soVeNguoiLon = 50;
var soVeTreEm = 10;
var tienVeNL = 10000;
var tienVeTE = 5000;
var phanTramTT = 10;
var doanhThu = 0;
var tongVe = 0;
var tienTuThien = 0;
var tienConLai = 0;

// B2
tongVe = soVeNguoiLon + soVeTreEm;

doanhThu = (soVeNguoiLon * tienVeNL) + (tienVeTE * soVeTreEm);

tienTuThien = doanhThu * phanTramTT /100;

tienConLai = doanhThu - tienTuThien;

// B3
console.log("Ten phim:....." + tenPhim 
+"\n So ve:....." + tongVe 
+"\n Phan Tram tu thien:....." + phanTramTT +"%"
+"\n Doanh thu:...." + doanhThu
+"\n Tien tu thien:....." + tienTuThien
+"\n Tien con lai:....." + tienConLai );
