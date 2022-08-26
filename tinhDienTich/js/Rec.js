import Shape from "./Shape.js";

export default class Rec extends Shape {

    // từng tham số của con, các tham số còn lại của cha
    constructor(length, width,...propsParent){
        super(...propsParent);
        this.length = length;
        this.width = width;
    }
    calcArea(){
        this.area = this.length * this.width;
    }
    draw(){
        document.getElementById("main").innerHTML = `
           <div style="background:${this.bgColor} ;  width:${this.sizeX } ; height:${this.sizeY} ;"  >${this.name} - ${this.area}</div>
        `
     }
}