/**
 * 승자 정하기
 **/
 
 /**
  * a가 클때는 'A Win!!' 리턴
  * b가 클때는 'B Win!!' 리턴
  * 같을때는 'Draw!!' 리턴
  * 

  1. a,b 비교
  2. if a>b A Win
  3. b > B Win
  4. else Draw

  **/
 function who_is_winner(a, b){
    if (a > b) {
      return 'A Win!!';
    } else if (a < b){ 
      return 'B Win!!';
    } else {
       return 'Draw!!';
    }
 }
 
 console.assert(who_is_winner(1, 2)==='B Win!!', 'Player B should won');
 console.assert(who_is_winner(2, 1)==='A Win!!', 'Player A should won');
 console.assert(who_is_winner(2, 2)==='Draw!!', 'Nobody should won');
