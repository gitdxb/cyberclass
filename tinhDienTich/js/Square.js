import Shape from "./Shape.js";

export default class Square extends Shape{
    // constructor(name, bgColor, sizeX, sizeY,side)
    constructor(side, ...propsParent){
         super(...propsParent);
        //thuộc tính riêng
        this.side = side;
    }
    calcArea(){
        this.area = Math.pow(this.side, 2);
    }
    draw(){
       document.getElementById("main").innerHTML = `
          <div style="background:${this.bgColor} ;  width:${this.sizeX } ; height:${this.sizeY} ;"  >${this.name} - ${this.area}</div>
       `
    }

}