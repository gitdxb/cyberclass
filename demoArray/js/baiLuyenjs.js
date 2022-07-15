/**
 * + Them so vao mang
 * + Tinh tong so chan
 * + dem so am
 */

// empty array
var nums = [];
function themSo() {
    var num = Number(document.querySelector("#formNum input").value);
    // push: luu gia tri moi vao mang
    nums.push(num);
    console.log(nums);
}

document.querySelector("#formNum button").onclick = themSo;

function tinhTongChan() {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            // so Chan
            sum += nums[i];
        }
    }
    console.log("Tong " + sum);
}
document.getElementById("btnTinhh").onclick = tinhTongChan;

function demSoAm() {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            // so am
            count++;
        }
    }
    console.log("So am " + count);
}
document.querySelector("#btnDem").onclick = demSoAm;