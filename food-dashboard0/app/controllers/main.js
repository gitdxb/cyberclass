// (bảo mật code hơn) + phải dùng live server
// import các file cần dùng cho main
import Food from "../models/Food.js";
import FoodService from "../service/FoodService.js";

//tạo thể hiện
//let food = new Food()  => cái này gọi là quản lý theo module

const foodSer = new FoodService();

let showTable = (foodArray) => {
    let content = "";
    foodArray.map((food) => {
        // destructuring
        let {id,hinhAnh,tenMon,loai,gia,phanTram,giaSauKM,tinhTrang} = food;
        content += `
            <tr>
                <td>${id}</td>
                <td>
                    <img src="../../assets/img/${hinhAnh}" alt="" />
                    <span>${tenMon}</span>
                </td>
                <td>${loai == "loai1"? "Chay":"Mặn"}</td>
                <td>$${Number(gia).toLocaleString()}</td>
                <td>${phanTram}%</td>
                <td>$${Number(giaSauKM).toLocaleString()}</td>
                <td>${tinhTrang == 1? "Còn": "Hết"}</td>
                <td>
                    <button class="btn btn-danger" >Delete</button>
                    <button class="btn btn-info" >View</button>
                </td>
            </tr>
        `;
    })
    document.querySelector("#tbodyFood").innerHTML = content;
}

let getList = () => {
    foodSer.getFoodList()
    .then((result) => { 
        console.log(result.data);
        showTable(result.data); 
     })
    .catch((error) => { 
        console.log(error);
     })
}

// goi ham getList de lay danh sach mon ngay khi load trang
getList();

let addFoodMain = () => {
    // lay data tu form

    // doi tuong (foodValue) chua cac gia tri lay tu form
    let foodValue = {};
    let formELE = document.querySelectorAll("#exampleModal .form-food");
    console.log(formELE); // kieu Nodelist
    for (let i = 0; i < formELE.length; i++) {
        //console.log(formELE[i].id, formELE[i].value); //value, id
        let {id,value} = formELE[i];
        // thuoc tinh, gia tri cua thuoc tinh
        console.log(id,value);
        // do ko can luu thuoc tinh id nen rang buoc dieu kien lay gia tri
        if (id != "id"){
            // [id]:value: object literal => tenMon: "gia tri ten tu form"
            //? spread operator
            // {...foodValue,[id]:value} => copy thuoc tinh cu, them thuoc tinh moi
            foodValue = {...foodValue,[id]:value};
        }
        console.log(foodValue);
    }

    let {tenMon, loai, gia, phanTram, hinhAnh, moTa} = foodValue;
    let food = new Food(tenMon, loai, Number(gia), Number(phanTram), hinhAnh, moTa);
    food.tinhKM();

    foodSer.addFood(food);
    getList();
}
document.querySelector("#btnThemMon").onclick = addFoodMain;