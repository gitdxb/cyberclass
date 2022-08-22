/* ---------------- // Default param -------------- */

let sum = (num1 = 0, num2 = 0) => {
    console.log(num1 + num2);
} 
sum(2,4); //6
sum(2); // giá trị ko có => undefine => 2 + undefine => NaN
sum();


//Rest Param
// bị giới hạn số lượng tham số
// let showFoodList = (haiSan, lau,) => {
//     console.log(haiSan, lau, japan);
// }
let showFoodList = (...menuFood) => {
    console.log(menuFood); // kiểu dữ liệu mảng
    //map(anfn -- callback func)
    menuFood.map((food) => { 
        console.log(food); // từ mảng in ra từng item
     })
}
showFoodList("tom", "my", "cua");

/* ---------------- Spead operator --------------- */
// Tham trị => chỉ truyền giá trị, biến mới có thay đổi thì cũng không ảnh hưởng biến ban đầu
let petName = "be Na";

let petName2 = petName;
petName2 = "Na";
console.log(petName);
console.log(petName2);

// Tham chiếu => truyền địa chỉ ô nhớ => sửa biến nào cũng ảnh hưởng đến nhau

let pets = ['🍊','🍌'];

// Solution:
//? Spread operator: lấy từng phần tử từ mảng ra, thành từng giá trị đơn lẻ
// ['🍊','🍌'] = '🍊','🍌'
// let pet2 = pets;
// => pet2.push('🍉');
// ...pets: copy mảng, '🍉' thêm phần tử mới
let pet2 = [...pets,'🍉'];
console.log(pets);
console.log(pet2);

/* --------------- Destructuring {},[] -------------- */

let crush = {
    name: "crush1",
    age: 18,
    avatar: "https://i.pravatar.cc/?u=69",
    address:{
        city: "DN",
        houseNum: "103",
    }
}

let showInfo = () => {
    let {city, houseNum} = crush.address;
    document.querySelector("#colCrush").innerHTML = `
    <div class="card">
        <img src="${crush.avatar}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${crush.name}</h5>
            <p>Age: ${crush.age}</p>
            <p>City: ${crush.address.city}</p> 
            <p>City: ${houseNum}</p> 
        </div>
    </div>
    `
}
showInfo();

/* --------------- Object literal ------------- */
let fullName = "Crush"; // lay tu UI
let crush2 = {
    // fullName = fullName, khi tên thuộc tính trùng tên với biến truyền vào
    fullName,
    age: 18,
    avatar: "https://i.pravatar.cc/?u=69",
}
console.log(crush2.fullName);

let age = "ageCrush3";
let crush3 = {
    // Tạo động tên thuộc tính
    fullName,
    [age]: 18,  // ageCrush3: 18;
    avatar: "https://i.pravatar.cc/?u=69",
}
console.log(crush3.ageCrush3);

