/**
 * 프로토 타입 체이닝 / Prototype Chaining
 */

function Polygon(width, height) {
    this._width = width;
    this._height = height;
}

Polygon.prototype.getWidth = function() {
    return this._width;
}

Polygon.prototype.getHeight = function() {
    return this._height;
}

const p1 = new Polygon(50, 30);

console.log(p1);
console.log(p1.getWidth());
console.log(p1.getHeight());

console.log('depth 1', p1)
console.log('depth 2', Polygon.prototype)
console.log('depth 3', Polygon.prototype.__proto__)


p1._width
p1.getWidth
p1.getHeight
p1.asd

function Rectangle(width, height) {
    this._width = width;
    this._height = height;
}

Rectangle.prototype = new Polygon();
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function () {
    let result;
    result = this._width * this._height;
    return result;
}



const r1 = new Rectangle(11, 22);

console.log('depth 1', r1)
console.log('depth 2', r1.__proto__)
console.log('depth 3', r1.__proto__.__proto__)

console.log(r1.getWidth());


/**
 * Retangle => Polygon을 확장한것
 * Polygon  => 자신의 props/prototype을 Retangle
 * 
 */

function Pizza(name){
    this._name = name;
}

Pizza.prototype.dough = function(){
    console.log('create dough');
}

Pizza.prototype.topping = function(){
    console.log('Add chease');
}

Pizza.prototype.bake = function(){
    console.log('Bake Pizza');
}

Pizza.prototype.package = function(){
    console.log('put in box')
}

Pizza.prototype.make = function(){
    this.dough();
    this.topping();
    this.bake();
    this.package();
}

function SweetPotatoPizza(){}

SweetPotatoPizza.prototype = new Pizza();

/**
 * Method override
 */
SweetPotatoPizza.prototype.topping = function(){
    console.log('Add chease and sweet potato');
}

const pizza1 = new Pizza('SweetPotato Pizza');
pizza1.make();


const pizza2 = new SweetPotatoPizza('SweetPotato Pizza');
pizza2.make();

/**
 * ** JS Base
 * ** Type
 * ** Calucation
 * *  Function
 * ** If/Else
 * *  Array
 * *  Loop/Iterrator
 * Object
 */
