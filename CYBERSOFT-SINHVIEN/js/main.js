/**
 * Lay diem tb luu vao mang diem
 * Danh sach sinh vien tren 5
 * Dem SV gioi
 * Tim kiem sv diem cao nhat/ thap nhat
 * Sap xep diem tang dan
 */

var dtb = []
function layDTB() {
    var tdELE = document.querySelectorAll(".td-scores");
    for (var i = 0; i < tdELE.length; i++) {
        // lay noi dung cua the html
        var num = Number(tdELE[i].innerHTML);
        dtb.push(num);
    }
}