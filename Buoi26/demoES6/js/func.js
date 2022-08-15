// thông thường
function sum(x, y) {
  console.log(x + y);
}

// func expression
var sum = function (x, y) {
  console.log(x + y);
};

// arrow function
function hello(name) {
  return "Hello" + name;
}

// => trở thành
let hello = (name) => {
  return "Hello" + name;
};

// arrow func chỉ có 1 biến, bỏ dấu ()
let hello = (name) => {
  return "Hello " + name;
};

// arrow func nếu hàm chỉ có 1 lệnh return thì bỏ mẹ lun chữ return
let hello = (name) => "Hello " + name;
