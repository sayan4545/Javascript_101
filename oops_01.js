/*
    Blueprints are called classes (Products)
    Objects are the real instances (Mobile phones, laptops ,etc)
*/
class Pen{
    constructor(colour,price){
        this.colour =colour;
        this.price =price;
    }
}

const A = new Pen("Blue",89);
console.log(A.colour);