/**
 *  Celcious to Kelbin
 * 
 * 인자 하나로 섭씨온도를 입력 받고 절대온도 K값을 리턴한다.
 * 변환이 불가능 할경우에는 리턴하지 않는다.
 */

function cToK() {
    
    if (false) {
        const ceilcious = -273.20;
    
        if (typeof ceilcious !== 'number') {
            console.error('Celicious is not number');
        }
        else {
            let kelbin = ceilcious + 273.15;
    
            if (ceilcious < -273.15) {
                console.error('Invalid temperature C');
            }
            else {
                console.log('Celcious ' + ceilcious + 'c is in kelbin ' + kelbin + 'K');
            }
        }
    }
    return 0;
}

console.assert(cToK(-273.15) === 0, "-273.15c should be 0K");
console.assert(cToK(0) === 273.15, "0c should be 273.15K");
console.assert(!isNaN(cToK(-273.25)), "-273.25 cannot converted to kelbin");
