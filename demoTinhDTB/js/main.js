// Hàm có tham số, không có kết quả trả về (return)
function sum() {
    console.log(5+6); // 11
}
sum();

// param: tham số
// phạm vi sử dụng của tham số: chỉ bên trong hàm khai báo nó
function sum2(num1, num2) {
    console.log(num1 + num2);
}

// Sử dụng (call function)
// Đối số (argument) (giá trị truyền vào hàm khi gọi hàm)
sum2(2,3);
sum2(3,5);

//?phạm vi biến trong ES5
// global & local
var fullName = "Nguyen Van";
function sum3(num1, num2) {
    var total = 0;
    total = num1 + num2;
    console.log(total);
    console.log(fullName);
    return total; // lệnh trả kết quả ra khỏi hàm và dừng hàm
    console.log("dòng sau return"); 
}

console.log(fullName);

var kq = sum3(11,12);
console.log(kq);
console.log(sum3(11,12));