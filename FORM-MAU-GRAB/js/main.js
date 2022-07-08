/**
 * Khối 1:
 * Bảng giá cước
 * loaiXe
 * soKM
 * tgCho
 * 
 * Khối 2:
 * B1: Tạo biến chứa các giá tiền (toàn cục)
 * B2: Lấy các giá trị từ form
 * B3: Kiểm tra loại xe
 * B4: Kiểm tra đoạn đường KM
 * B5: Lập công thức theo loại xe và KM
 * B6: Kiểm tra thời gian chờ
 * => Tính tiền phạt
 * 
 * Khối 3:
 * thanhTien
 */

// Bảng giá cước
const DAU_TIEN_CAR = 8000;
const KM1_19_CAR = 7500;
const KM_TREN19_CAR = 7000;
const TG_CHO_CAR = 2000;

const DAU_TIEN_SUV = 9000;
const KM1_19_SUV = 8500;
const KM_TREN19_SUV = 8000;
const TG_CH_SUV = 3000;

const DAU_TIEN_BLACK = 10000;
const KM1_19_BLACK = 9500;
const KM_TREN19_BLACK = 9000;
const TG_CH_BLACK = 3500;

// Hàm tính tiền cước
function tinhThanhTien() {
    var radioCar = document.getElementById("grabCar");
    var radioSUV = document.getElementById("grabSUV");
    var radioBlack = document.getElementById("grabBlack");
    var soKM = Number(document.getElementById("inpKM").value);
    var tgCho = Number(document.getElementById("inpTime").value);
    console.log(radioCar, radioSUV, radioBlack, soKM, tgCho);

    // console.log(radioCar.checked);
    var loaiXe = '';
    if(radioCar.checked){
        loaiXe = "Car";
    } else if(radioSUV.checked){
        loaiXe = "SUV"
    } else if(radioBlack.checked) {
        loaiXe = "Black"
    } else {
        alert("Hay nhap loai xe!");
    }
    console.log(loaiXe);

    // Tính tiền theo km của từng loại xe
    var thanhTien = 0;
    switch (loaiXe) {
        case "Car":
            console.log("Car km");      
            // Lap cong thuc theo km
            if (0 < soKM && soKM <= 1) {
                console.log("Gia dau");
                thanhTien = soKM * DAU_TIEN_CAR;
            } else if (1 < soKM && soKM <= 19) {
                console.log("Gia 1-19")
                thanhTien = DAU_TIEN_CAR + (soKM - 1) * KM1_19_CAR;
                console.log("Thanh tien " + thanhTien);
            } else if (soKM > 19) {
                console.log("Gia tren 19")
                thanhTien = DAU_TIEN_CAR + 18 * KM1_19_CAR + (soKM - 19) * KM_TREN19_CAR;
            } else {
                alert("Nhap KM di!");
            }
            break;
        case "SUV":
            console.log("SUV KM");

            if (0 < soKM && soKM <= 1) {
                console.log("Gia dau");
                thanhTien = soKM * DAU_TIEN_SUV;
            } else if (1 < soKM && soKM <= 19) {
                console.log("Gia 1-19")
                thanhTien = DAU_TIEN_SUV + (soKM - 1) * KM1_19_SUV;
            } else if (soKM > 19) {
                console.log("Gia tren 19")
                thanhTien = DAU_TIEN_SUV + 18 * KM1_19_SUV + (soKM - 19) * KM_TREN19_SUV;
            } else {
                alert("Nhap KM di!");
            }
            break;
        case "Black":
            console.log("Black KM");

            if (0 < soKM && soKM <= 1) {
                console.log("Gia dau");
                thanhTien = soKM * DAU_TIEN_BLACK;
            } else if (1 < soKM && soKM <= 19) {
                console.log("Gia 1-19")
                thanhTien = DAU_TIEN_BLACK + (soKM - 1) * KM1_19_BLACK;
            } else if (soKM > 19) {
                console.log("Gia tren 19")
                thanhTien = DAU_TIEN_BLACK + 18 * KM1_19_BLACK + (soKM - 19) * KM_TREN19_BLACK;
            } else {
                alert("Nhap KM di!");
            }
            break;
        default:
            alert("Loai xe ko ton tai");
            break;
    }
}
    
    