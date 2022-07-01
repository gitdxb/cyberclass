var userELE = document.getElementById("username");
console.log(userELE);

// Lay gia tri control cua form (input, textarea, select. checkbox, radio)
console.log("Gia tri cua username ", userELE.value);


var pass = document.getElementById("password").value;
console.log("Gia tri cua password: ", pass);

/**
 * Demo doi noi dung
 * 
 * 
 * ? Thoi diem chay chuc nang code
 * 1: Khi nguoi dung load trang web
 * 2: Khi nguoi dung tuong tac voi UI (click, go, di chuyen chuot, scroll web)
 * 
 * => De gan duoc chuc nang (cac dong code xu ly chung 1 chuoi cac hanh dong)
 * => gom vao chung 1 ham (function)
 * 
 * Function:
 * + Gom nhom cac dong code co chung chuc nang xu ly
 * + Gan ham vao cho cac su kien (event)
 */
// Khai bao ham
// ? [Tu khoa] [tenHam] (){// cac dong code xu ly}
function showInfo(){
    console.log("Lay duoc thong tin roi ne!");
}

//? Goi/ su dung ham (call function) 
// Thoi diem 1: chay khi load trang
//showInfo();

//Thoi diem 2: chay khi click
// C1: gan su kien click bang code js
//! Khi gan ham vao su kien click, thi chi gan ten ham, ko duoc co dau (), neu co dau () thi chay ngay khi duoc load trang web
//document.getElementById("btnTest").onclick = showInfo;

//C2: su dung thuoc tinh onclick cua the html (gan truc tiep vo html)
//! nho co dau () de html biet day la ham

// Khai bao ham doi noi dung
function changeContent() {
    // tim toi the can doi
    var textELE = document.getElementById("txtChangeContent");
    //innerHTML: thay doi noi dung cua 1 the (chu, cac the con)
    textELE.innerHTML = "Doi roi ne!";
    
    // Doi CSS
    // css inline => style
    //! Uu diem: inline => uu tien cao (color:white! important; su dung js style)
    //! Nhuoc diem: kho chinh sua, neu them nhieu css se dai code
    // textELE.style.backgroundColor = "red";
    // textELE.style.fontSize = "30px";

    //? className: se xoa class cu va ghi de cac class moi
    // textELE.className = "testClass testClass2";

    //? classList
    textELE.classList.add("addedClass");
}

// css external (thuoc tinh class cua html)
//classList, className


// Gan ham vao cho su kien click
document.getElementById("btnChange").onclick = changeContent;


// Tat , bat den
function turnOn() {
    document.getElementById("imgBul").src="./img/pic_bulbon.gif";
}
document.getElementById("btnOn").onclick = turnOn;

function turnOff() {
    document.getElementById("imgBul").src="./img/pic_buloff.gif";
}
document.getElementById("btnOff").onclick = turnOff;