//? phạm vi biến

//?Global
var username = "crush1";
// let username = "crush1";
function showInfo() {
    //? local
    // var pass = "12345";
    let pass = "12345";
    console.log('var trong hàm ', username);
    console.log('trong hàm ', pass);

    //block{}
    if (pass == "12345"){
        // var notify = "đăng nhập thành công";
        let notify = "đăng nhập thành công"; 
        console.log('trong block', notify);
    }
    //!console.log('ngoài block ', notify);  // với LET thì ko được
}
showInfo();
console.log('var ngoài hàm ', username);
//console.log('ngoài hàm ', pass); // lỗi, k cho


/*----------HOSTING------------- */


console.log('var', city);
console.log('let', address);

var city = "DN";
let address = "173 Lương Nhữ Hộc";