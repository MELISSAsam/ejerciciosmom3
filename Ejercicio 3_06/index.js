"use strict"
let nums = [12,43,2,41,10];
let count=0;
for (let i = 0; i < nums.length; i++){
     if (nums [i] % 2===0){
        count++;
     }
     
}
alert ("Los numeros pares son:" + count);
