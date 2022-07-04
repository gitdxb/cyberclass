console.log("done");

function addDisabled() {
    document.getElementById("txtDisabledddd").disabled = true;
}

document.getElementById("btnClick").onclick = addDisabled;

function removeDisabled() {
    document.getElementById("txtDisabledddd").disabled = false;
    document.getElementById("btnTimeline").disabled = false;
}

document.getElementById("btnRemove").onclick = removeDisabled;

/**
 * Demo tính tiền TIP
 * ?Khối 1: Input
 * tongTien
 * phanTramTip
 * soNguoi
 * 
 * 
 * ?Khối 2: Các bước tính toán
 * B1: lấy giá trị từ form, lưu vào biến
 * B2:
 *  tongTienTip = tongTien * phanTramTip /100
 *  tipMoiNguoi = tongTienTip / soNguoi
 * 
 * B3: hiển thị kết quả lên UI
 * 
 * ?Khối 3: Output
 * tiền tip mỗi người
 * tipMoiNguoi
 */

function tinhTienTip() {
    var tongTien = document.getElementById("inputTotal").value;
    var soNguoi = document.getElementById("inputPeople").value;
    var phanTramTip = document.getElementById("selectPercent").value;
    console.log(tongTien, soNguoi, phanTramTip);
    
    // Computation
    var tongTienTip = tongTien * phanTramTip / 100;
    var tipMoiNguoi = tongTienTip / soNguoi;
    console.log(tipMoiNguoi);

    // toLocateString() => 100000 => 100.000
    //toFixed(2) => 3.12121212 => 3.12
    // Output to the screen
    document.getElementById("txtResult2").innerHTML = "TIP AMOUNT <br> <sup>$</sup>"+tipMoiNguoi.toFixed(2)+ "<br> mỗi người";
}

document.getElementById("btnCalc").onclick = tinhTienTip;