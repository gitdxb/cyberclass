export default class Shape {
    constructor(name, bgColor, sizeX, sizeY) {
        this.name = name;
        this.bgColor = bgColor;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.area = 0;
    }
    calcArea(){
        this.area = 0;
    }
    draw(){
       document.getElementById("main").innerHTML = "Chưa tính diện tích"
    }
}