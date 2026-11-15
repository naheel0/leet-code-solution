/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
   let sum=0;
   while(n>0){
    let digit=n%10;
    sum +=digit;
    n=Math.floor(n / 10);
   } 
   return sum;
};