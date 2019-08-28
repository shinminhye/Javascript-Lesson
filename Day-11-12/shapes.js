/**
 * rectangle
 *  + width, height
 *  > area = width * height
 * circle
 *  + radious
 *  > area = radious * radious * PI
 * 
 * Shapes
 *  + childs = []; // rectagle, circle
 *  > area
 * 
 * 
 * (객체)생성자
 * 
 * 1. 메모리 상의 공간(인스턴스,  instance) 추가 => new
 * 2. 공간에 값을 저장      => 생성자 함수의 내용, 생성자 함수의 인자도 사용가능
 * *. 메소드의 경우에는 메모리 낭비가 생긴다.
 * 3. prototype => 생성시에 자동으로 들어가는 값.
 * 
 * property => 생성자 내부에서 this 사용
 * methods => prototype
 * 
 * 
 * instanceof
 */

function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

function K() { }
function J() { }
const instanceK = new K();
const instanceJ = new J();

console.log(`instanceK  is instanceof K`, instanceK instanceof K);
console.log(`instanceJ  is instanceof K`, instanceJ instanceof K);

/////////////

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
Rectangle.prototype.getArea = function () {
    let result;
    result = this.width * this.height;
    return result;
}
/////////////
function Circle(radious) {
    this.radious = radious;
}
Circle.prototype.getArea = function () {
    //  pi * r^2
    let result = Math.PI * this.radious * this.radious;
    result = Math.PI * Math.pow(this.radious, 2);
    return result;
}
/////////////

/**
 * 역할 -> 여러개의 circle 또는 rectangle 객체를 보관.
 *         추가도 되고
 *         삭제도 된다
 * 
 *         자신이 관리중인 모든 도형의 넓이를 합산하여 반환.
 */
function Shapes() {
    // managed_shapes
    this.managed_shapes = [];
}
/**
 * 관리중인 도형 그룹에 도형을 추가
 * 전달된 객체가 도형인지 판단
 */
Shapes.prototype.add = function (shape) {
    if (shape instanceof Rectangle ||
        shape instanceof Circle
    ) {
        if (this.managed_shapes.indexOf(shape) === -1) {
            this.managed_shapes.push(shape);
        }
    } else {
        throw new Error('shape should be Rectagle or Circle');
    }
}
/**
 * 관리중인 도형그룹에서 전달받은 도형과 같은 도형을 제거
 */
Shapes.prototype.remove = function (target) {
    // target idx
    const targetIdx = this.managed_shapes.indexOf(target); // 0~N-1, -1
    // console.log(targetIdx);
    // remove idx position element
    if (targetIdx > -1) {
        this.managed_shapes.splice(targetIdx, 1);
    }
}
/**
 * 관리중인 도형의 모든 넓이를 구해서 합산
 */
Shapes.prototype.getArea = function () {
    /* let sum = 0;
    this.managed_shapes.forEach(function (currentValue) {
        // currentValue -> Rectangle, Circle
        // console.log(sum, currentValue, currentValue.getArea);
        sum = currentValue.getArea() + sum;
    });
    return (sum);
 */
    return this.managed_shapes
        .map(it => it.getArea())
        .reduce((acc, v) => acc + v)
}
/////////////

const rect1 = new Rectangle(100, 100);
const rect2 = new Rectangle(30, 20);
const rect3 = new Rectangle(30, 21);

const circle1 = new Circle(10);



console.log('RECT1: ', rect1);
console.log('RECT2: ', rect2);
console.log('CIRC1: ', circle1);

console.log(rect1.getArea()); // 10000
console.log(rect2.getArea()); // 600
console.log(circle1.getArea()); // 31.1e2

const wrapper = new Shapes();
console.log(wrapper);

wrapper.add(rect1);
console.log(wrapper);

wrapper.add(rect2);
wrapper.add(rect2);
console.log(wrapper);

wrapper.add(circle1);
wrapper.add(rect3);
console.log(wrapper);

console.log(wrapper.getArea()); // 10606.28......

wrapper.remove(circle1);
console.log('REMOVE C', wrapper);
wrapper.remove(circle1);
console.log('REMOVE C', wrapper);

console.log(wrapper.getArea()); // 10600

/* wrapper.add(1);
wrapper.add(undefined);
wrapper.add({getArea(){return 'XXX'}});

console.log(wrapper.getArea()); // 10600
 */
