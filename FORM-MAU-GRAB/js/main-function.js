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

// Main function
// Gọi các hàm nhỏ có chức năng cụ thể
function tinhThanhTien() {
    // Biến cục bộ
    var radioCar = document.getElementById("grabCar");
    var radioSUV = document.getElementById("grabSUV");
    var radioBlack = document.getElementById("grabBlack");
    var soKM = Number(document.getElementById("inpKM").value);
    var tgCho = Number(document.getElementById("inpTime").value);
    console.log(radioCar, radioSUV, radioBlack, soKM, tgCho);

    // Gọi hàm
    var loaiXe = kiemTraLoaiXe(radioCar,  radioSUV, radioBlack);

    console.log(loaiXe);
    var thanhTien = 0;
    switch (loaiXe) {
        case "Car":
            thanhTien = tinhTheoKM(soKM, DAU_TIEN_CAR,KM1_19_CAR, KM_TREN19_CAR) + tinhTienCho(tgCho, TG_CHO_CAR);
            break;
        case "SUV":
            thanhTien = tinhTheoKM(soKM, DAU_TIEN_SUV, KM1_19_SUV, KM_TREN19_SUV) + tinhTienCho(tgCho, TG_CH_SUV);
            break;
        case "Black":
            thanhTien = tinhTheoKM(soKM, DAU_TIEN_BLACK, KM1_19_BLACK, KM_TREN19_BLACK) + tinhTienCho(tgCho, TG_CH_BLACK);
        break;
        default:
            alert("Please enter again!");
            break;
    }
    // console.log(thanhTien);
    document.getElementById("xuatTien").innerHTML = thanhTien.toLocaleString();
    document.getElementById("divThanhTien").style.display = "block";

}

// Tạo hàm
function kiemTraLoaiXe(radio1, radio2, radio3) {
    if (radio1.checked) {
        return "Car"
    } else if (radio2.checked) {
        return "SUV"
    } else if (radio3.checked) {
        return "Black"
    } else {
        alert("Please enter the car type!");
        return "";
    }
}

//Input: soKM, giaDT, gia1_19, giaTren19
// Xử lý: if...else if
// Output: thanhTien
function tinhTheoKM(soKM, giaDT, gia1_19, giaTren19) {
    if (0 < soKM && soKM <= 1) {
        console.log("Gia dau");
        return soKM * giaDT;

    } else if (1 < soKM && soKM <= 19) {
        console.log("Gia 1-19")
        return giaDT + (soKM - 1) * gia1_19;

    } else if (soKM > 19) {
        console.log("Gia tren 19")
        return giaDT + 18 * gia1_19 + (soKM - 19) * giaTren19;
    } else {
        alert("Nhap KM di!");
        return 0;
    }
}


// Input: tgCho, giaCho
// Xử lý: tính số lần phạt tgCho/3
//
// Output: tienCho
function tinhTienCho(tgCho, giaCho) {
    var soLanPhat = Math.floor(tgCho/3);
    var thanhTien = 0;
    if (tgCho > 0) {
        thanhTien = soLanPhat * giaCho;  
        // return soLanPhat * giaCho;
    }
    return thanhTien;
    // return 0;
}

