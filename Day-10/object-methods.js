/**
 * 
 */

const car = {
    wheel: 4,
    addWheel(){
        this.wheel++;
    },
    getWheel(){
        return this.wheel;
    }
}

console.log(car);

console.log(car.getWheel()); // 4

car.addWheel();

console.log(car.getWheel()); // 5


// capulation , 캡슐화

// addNumber => 숫자를 추가하고
// getAverage => 지금까지 추가된 숫자의 평균
const averageCalculator_ = {

};

// 4 7 9 13

function averageCalculator__(inputs){
    // let inputs = [4, 7, 9, 13]; // 값이 추가 될수 있다.

    let sum = 0;
    let count;
    
    count = inputs.length;
    for(let i=0; i<inputs.length;i++){
        sum = sum + inputs[i];
    }
    
    
    let avg = sum / count; 
    return avg;
}



const input =  [4, 7, 9, 13];

// console.log(averageCalculator(input));

// let sum=0;let count = 0;

const averageCalculator = {
    _sum: 0,
    _count: 0,
    addNumber(number){
        this._sum += number;
        this._count++;
    },
    getCurrentAvg(){
        return this._sum / this._count;
    }
};

averageCalculator.addNumber(5);
averageCalculator.addNumber(10);
averageCalculator.addNumber(15);

console.log(averageCalculator.getCurrentAvg());

// 생성자
const averageCalculatorConstructor = function(){
    // this = {};
    this._sum = 0;
    this._count = 0;
    this.addNumber = function(){};
}

averageCalculatorConstructor.prototype.addNumber = function (number){
    this._sum += number;
    this._count++;
};
averageCalculatorConstructor.prototype.getCurrentAvg = function(){
    return this._sum / this._count;
};

const a = new averageCalculatorConstructor();

a.addNumber(100);

