// Default param

let sum = (num1, num2) => {
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
    console.log(menuFood);
    //map(anfn -- callback func)
    menuFood.map((food) => { 
        console.log(food); // từ mảng in ra từng item
     })
}
showFoodList("tom", "my", "cua");



let pets = ['🍊','🍌'];

// Solution:
//? Spread operator: lấy từng phần tử từ mảng ra
// ['🍊','🍌'] = '🍊','🍌'
// let pet2 = pets;
// => pet2.push('🍉');
// ...pets: copy mảng, '🍉' thêm phần tử mới
let pet2 = [...pets,'🍉'];
console.log(pets);
console.log(pet2);

/* ------------------------------ Destructuring ----------------------------- */

let crush = {
    name: "crush1",
    age: 18,
    avatar: "https://i.pravatar.cc/?u",
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

/* ----------------------------- Object literal ----------------------------- */
