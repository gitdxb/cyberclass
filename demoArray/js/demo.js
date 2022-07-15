/**
 * Array (mảng)
 * 
 * Variable (biến)
 *  + lưu trữ giá trị
 * + number, string, boolean (true/false)
 */

var songs = ["Sáng mắt chưa", "Vì mẹ anh bắt chia tay", "Có không giữ mất đừng tìm"]
var nums = [0,2,3,4,1,33,9]
var foods = ["Chicken", "Fish", "Duck"]
// console.log(foods)
for (var i = 0; i < songs.length; i++) {
    console.log(songs[i]);
}

// Tim toi cac the bang class name
var liELE = document.getElementsByClassName("nav-item");
console.log(liELE)

// querySelector
// querySelectorAll
var liELEList2 = document.querySelectorAll("#list2 li.nav-item");
console.log(liELEList2)

for (var i = 0; i < liELEList2.length; i++) {
    liELEList2[i].style.background = "pink";
}

var liFirst = document.querySelector("#list2 li.nav-item");
console.log(liFirst)
