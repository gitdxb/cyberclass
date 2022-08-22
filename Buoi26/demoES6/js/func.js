// thông thường
sum(); // bị hoisting
function sum() {
  console.log(1+3);
}
sum();

// func expression
//! sum1();
var sum1 = function (x, y) {
  console.log(x + y);
};
sum1();

/* -------- // arrow function ------------- */
function hello(name) {
  return "Hello" + name;
}

// => trở thành
let hello1 = (name) => {
  return "Hello" + name;
};
//? Các cách rút gọn hàm
// arrow func chỉ có 1 biến, bỏ dấu ()
let hello2 = (name) => {
  return "Hello " + name;
};


// arrow func nếu hàm chỉ có 1 lệnh return thì bỏ mẹ lun chữ return
let hello3 = (name) => "Hello " + name;

let showInfo = (name) =>{
  return `Hello ${name}`;
}
// Level 1: nếu chỉ có 1 tham số thì bỏ  dấu ()
let showInfo2 = name =>{
  return `Hello ${name}`;
}

//Level 2: nếu chỉ có 1 dòng code duy nhất là lệnh return, bỏ dấu {}, nếu có return thì bỏ từ return

let showInfo3 = name =>`Hello ${name}`;
let showInfo4 = name => console.log('1 dòng code');

