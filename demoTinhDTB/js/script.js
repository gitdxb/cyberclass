/**
 * Tính điểm khối 1
 * 
 */
function tinhDTBParams(diem1, diem2, diem3) {
    var dtb = (Number(diem1) + Number(diem2) + Number(diem3)) / 3;
    // document.getElementById("txtResult").innerHTML = "Khoi 1: " +dtb;
    return dtb;

}
function tinhDTB() {
    var toan = document.getElementById("diemToan").value;
    var ly = document.getElementById("diemLy").value;
    var hoa = document.getElementById("diemHoa").value;
    console.log(toan, ly, hoa);

    // parseInt, parseFloat = string to number
    // var dtb = (Number(toan) + Number(ly) + Number(hoa)) / 3;
    // document.getElementById("txtResult").innerHTML = "Khối 1: " + dtb;
    document.getElementById("txtResult").innerHTML = "Khoi 1: " + tinhDTBParams(toan, ly, hoa);
}
function tinhDTB2(params) {
    var toan = document.getElementById("diemToan2").value;
    var hoa = document.getElementById("diemHoa2").value;
    var sinh = document.getElementById("diemSinh").value;
    console.log(toan,hoa,sinh);

    document.getElementById("txtResult2").innerHTML = "Khoi 2: " + tinhDTBParams(toan, sinh, hoa);
}