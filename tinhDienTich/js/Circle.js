import Shape from "./Shape.js";

export default class Circle extends Shape {
    constructor(radius,...propsParent){
        super(...propsParent);
        this.radius = radius;
    }
    calcArea(){
        this.area = 3.14 * Math.pow(this.radius, 2);
    }
    draw(){
        document.getElementById("main").innerHTML = `
           <div style="background:${this.bgColor} ;  width:${this.sizeX }px ; height:${this.sizeY}px ; border-radius: 50%; "  >${this.name} - ${this.area}</div>
        `
     }
}