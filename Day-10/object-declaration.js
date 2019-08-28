/**
 * 
 * 1. Props
 * 2. Methods
 * 3. this keyword
 * 
 * 1 + 2 + 3  + (Coding Convention) => 캡슐레이션
 *               코딩 규약
 */

/**
 * Add Property method
 * 
 * 프로퍼티를 채워넣는 방법
 */

const a = {};
a.prop_a = 'This is propery appendix way';
a.method_b = function(){
    console.log(this.prop_a);
}


/**
 * Literal
 * 
 * 리터럴 정의
 */

 const b = {
     prop_a: 'This is literral way',
     method_b: function(){
         console.log(this.prop_a);
     }
 };

 /**
  * Constructor
  * 
  * 생성자
  */

const c_constructor = function(){
    this.prop_a = 'This constructor way';
}
c_constructor.prototype.method_b = function(){
    console.log(this.prop_a);
}
c_constructor.prototype.method_b = function(){
    console.log(this.prop_a);
}
c_constructor.prototype.method_b = function(){
    console.log(this.prop_a);
}
c_constructor.prototype.method_b = function(){
    console.log(this.prop_a);
}
c_constructor.prototype.method_b = function(){
    console.log(this.prop_a);
}
c_constructor.prototype.method_b = function(){
    console.log(this.prop_a);
}
const c = new c_constructor();

/**
 * Class (ES6)
 */

 class D {
     constructor(){
         this.prop_a = 'This is class way';
     }
     method_b(){
         console.log(this.prop_a);
     }
     method_b(){
         console.log(this.prop_a);
     }
     method_b(){
         console.log(this.prop_a);
     }
     method_b(){
         console.log(this.prop_a);
     }
     method_b(){
         console.log(this.prop_a);
     }
 }
 /**
  * function D(){
  * this.prop_a = 'This is class way';
  * }
  * D.prototype.method_b = function(){
  * console.log(this.prop_a);
  * }
  */