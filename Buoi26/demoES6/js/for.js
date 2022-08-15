let menu = ["🍒", "🍑", "🥥", "🌶"];
// for
for (let i = 0; i < menu.length; i++) {
    // lấy giá trị dựa vào vị trí phần tử
    console.log(menu[i]);
}

/* --------------------------------- for in --------------------------------- */

// for in
for (let i in menu) {
    console.log(menu[i]);
}

/* --------------------------------- for of --------------------------------- */
// forof
for (let value of menu){
    // lấy giá trị dựa vào vị trí phần tử
    console.log(value);
}
let crush = {
    // key: value
    name: "crush1",
    age: 18,
    avatar: "https://i.pravatar.cc/?u",
    address:{
        city: "DN",
        houseNum: "103",
    }
}
for (const key in crush) {
    console.log(crush[key]);
    console.table(crush[key]);
}