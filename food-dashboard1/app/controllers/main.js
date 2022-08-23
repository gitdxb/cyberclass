//import các file cần dùng cho main
import Food from "../models/Food.js";
import FoodService from "../service/FoodService.js";

const foodSer = new FoodService();

// met
let showTable = (foodArray) => {
    let content = "";
    // anfn
    foodArray.map((food) => {
        // destructuring
        let { id, hinhAnh, tenMon, loai, gia, phanTram, giaSauKM, tinhTrang } = food;
        // <td>${food.id}</td>
        // if(loai =="loai1"){
        //     "chay"
        // }else{
        //     "mặn"
        // }
        // => toán tử 3 ngôi 
        content += `
            <tr>
                <td>${id}</td>
                <td>
                    <img src="../../assets/img/${hinhAnh}" alt=""  />
                    <span>${tenMon}</span>
                </td>
                <td>${loai == "loai1" ? "Chay" : "Mặn"}</td>
                <td>$${Number(gia).toLocaleString()}</td>
                <td>${phanTram}%</td>
                <td>$${Number(giaSauKM).toLocaleString()}</td>
                <td>${tinhTrang == 1 ? "Còn" : "Hết"}</td>
                <td>
                    <button class="btn btn-danger" >Xóa</button>
                    <button class="btn btn-info" onclick="getDetailMain('${id}')">Xem</button>
                </td>
            </tr>
         `
    });

    document.querySelector("#tbodyFood").innerHTML = content;
}


// met
let getList = () => {
    // anfn
    foodSer.getFoodList()
        .then((result) => {
            console.log(result.data)
            showTable(result.data);
        })
        .catch((error) => {
            console.log(error)
        })
}
//gọi hàm getList để lấy danh sách món ngay khi load trang
getList();

let addFoodMain = () => {
    //lấy dữ liệu từ form
    // let tenMon = document.querySelector("#tenMon").value;
    // map chỉ dùng được với Array
    // formELE.map((ELE) => { 
    //       console.log(ELE)
    //  })
    //đối tượng chứa các giá trị lấy từ form
    let foodValue = {};
    let formELE = document.querySelectorAll("#exampleModal .form-food");
    console.log(formELE);//NodeList

    for (let i = 0; i < formELE.length; i++) {
        // console.log(formELE[i].id, formELE[i].value);//value, id
        let { id, value } = formELE[i];
        //thuộc tính, giá trị của thuộc tính
        console.log(id, value);
        //do không cần lưu thuộc tính id nên ràng buộc điều kiện lấy giá trị
        if (id != "id") {
            //?object literal
            //[id]:value => tenMon:"giá trị tên từ form"

            //?spread operator 
            // {...foodValue,[id]:value} => {copy thuộc tính cũ, thêm thuộc tính mới}
            foodValue = { ...foodValue, [id]: value };

        }
        console.log(foodValue);
    }

    let { tenMon, loai, gia, phanTram, tinhTrang, hinhAnh, moTa } = foodValue;
    let food = new Food(tenMon, loai, Number(gia), Number(phanTram), tinhTrang, hinhAnh, moTa);
    food.tinhKM();

    foodSer.addFood(food)
        .then((result) => {
            getList();
        }).catch((error) => {
                console.log(error)
        })


}

document.querySelector("#btnThemMon").onclick = addFoodMain;

let getDetailMain = (id) => {
    console.log(id);
    foodSer.getFoodDetail(id)
    .then((result) => {
        console.log(result.data)
        // hiển thị giá trị lên form
        // document.querySelector("#id").value = "Mã món ăn";
        let formELE = document.querySelector
    })
    .catch((error) => { 
        console.log(error);
    })
}
// để gọi được getDetailMain bằng thuộc tính onclick của html
// chuyển hàm thành phương thức của window
window.getDetailMain = getDetailMain;