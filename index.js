function mindGame(number){
     if(number>0){
          let multiplyResult=number*3;
          let additionResult=multiplyResult+10;
          let divisionResult= additionResult/2;
          let result=divisionResult-5;
          return result;
     }
     else{
          return ("Input positive number")
     }
}
console.log(mindGame(33));


// function evenOdd(str) {
//      return (str.length % 2 === 0) ? 'even' : 'odd';
//    }
   


function evenOdd(string){
     if(string.length % 2 === 0){
          return 'even';
     } else{
          return 'odd';
     }
}
console.log(evenOdd('Batch7'));   


function isLGSeven(number1){
     let deduct7Result=number1-7;
     if (deduct7Result<7){
          return deduct7Result;
     }
     else{
          return number1*2;
     }
}
console.log(isLGSeven(15));




function findingBadDAta(array){

     let totalBadNumberCount=0;

     for (let i=0; i<array.length; i++){
          if (array[i]<0){
               totalBadNumberCount++;
          }
     }
     return totalBadNumberCount;
}
console.log(findingBadDAta([ -4, -9, -5, -33, -55 ]));

function gemsToDiamond(num1,num2,num3){
     let firstFriendGemPower=num1*21;
     let secondFriendGemPower=num2*32;
     let thirdFriendGemPower=num3*43;
     totalDiamond=firstFriendGemPower+secondFriendGemPower+thirdFriendGemPower;

     if(totalDiamond>=2000){
          return totalDiamond-2000;
     }
     else{
          return totalDiamond
     }
     
     // return totalDiamond;
     
}
console.log(gemsToDiamond(1,1,1));
