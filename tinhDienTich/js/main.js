import Square  from "./Square.js";


let tinhHinhVuong = () => {
    // name, bgColor, sizeX, sizeY
    let sq = new Square(5, "Hình Vuông","red","200px","200px");
    sq.calcArea();
    sq.draw();

}

tinhHinhVuong()