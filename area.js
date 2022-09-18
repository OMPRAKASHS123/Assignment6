class Rectangle{
    constructor(length,breadth){
        this.l=length;
        this.b=breadth;
    }
    Area(){
        console.log(this.l*this.b);
    }

}
class Square extends Rectangle{
    constructor(side,length,breadth){
       super(length,breadth)
        this.l=side;
        this.b=side;
    }
}
console.log("Area of Rectangle:")
let obj=new Rectangle(2,3);
obj.Area();
console.log("Area of Square:")
let obj1=new Square(2);
obj1.Area();

