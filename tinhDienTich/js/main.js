import Square  from "./Square.js";
import Rec from "./Rec.js";
import Circle from "./Circle.js";




let tinhHinhVuong = () => {
    let side = document.getElementById("side").value;
    let sideX = document.getElementById("squareX").value;
    let sideY = document.getElementById("squareY").value;
    let bgColor = document.getElementById("squareColor").value;
    // name, bgColor, sizeX, sizeY
    let sq = new Square(5, "Hình Vuông","red","200px","200px");
    sq.calcArea();
    sq.draw();

}
document.getElementById("areaSquare").onclick = tinhHinhVuong;

let tinhHinhCN = () => {
    let length = document.getElementById("recL").value;
    let width = document.getElementById("recW").value;
    let sizeX = document.getElementById("recX").value;
    let sizeY = document.getElementById("recY").value;
    let bgColor = document.getElementById("recColor").value;

    let rec = new Rec(length, width, "Hình chữ nhật", bgColor, sizeX, sizeY);
    rec.calcArea();
    rec.draw();
}
document.getElementById("areaRec").onclick = tinhHinhCN;

let tinhHinhTron = () => {
    let radius = document.getElementById("radius").value;
    let sizeX = document.getElementById("cirX").value;
    let sizeY = document.getElementById("cirY").value;
    let bgColor = document.getElementById("cirColor").value;

    let cir = new Circle(radius, "Hình tròn", bgColor, sizeX, sizeY);
    cir.calcArea();
    cir.draw();
}
document.getElementById("areaCircle").onclick = tinhHinhTron;