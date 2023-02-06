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
