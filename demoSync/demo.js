// Đồng bộ Synchronous
// Trình duyệt sẽ ưu tiên thực thi các câu lệnh không yêu cầu chờ đợi
// Sau đó mới thực hiện
console.log('Đồng bộ');
console.log('Bắt gà lấy trứng');
console.log('chiên trứng');
console.log('ăn thôi!');


// Bất đồng bộ Asynchronous
console.log('Bất đồng bộ');
console.log('Bắt gà lấy trứng');
setTimeout(function () {
    console.log('chiên trứng');
}, 1000)
console.log('ăn thôi!');