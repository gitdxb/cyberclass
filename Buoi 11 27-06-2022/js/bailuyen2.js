/**
 * Khoi 1: Input 1 so nguyen duong co 3 chu so
 * vd: 123,586,219
 * 
 * 
 * 
 * Khoi 2: 
 * B1: tao bien
 * number (chua so co 3 chu so)
 * soHangTram, soHangChuc, soDonVi
 * B2: Lap cong thuc tinh toan
 * soHangTram = Math.floor(number/100); => 5
 * var soDu = number%100 => 86
 * soHangChuc = Math.floor(soDu/10); => 8
 * soDonVi = soDu%10; => 6 
 * 
 * tong = soHangTram  + soHangChuc + soDonVi;
 * B3: Thong bao ket qua
 * 
 * Khoi 3: Output
 * Tong cua 3 chu so
 * 123 = 1 + 2 + 3 = 6
 */
console.log("configured")

//B1
var number = 586;
var soHangTram = 0;
var soHangChuc = 0;
var soDonVi = 0;
var tong = 0;

// B2:
soHangTram = Math.floor(number/100);
var soDu = number % 100;
soHangChuc = Math.floor(soDu/10);
soDonVi = soDu % 10;
tong = soHangTram  + soHangChuc + soDonVi

// B3
console.log("Tong cua 3 chu so: ", tong)