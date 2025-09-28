/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let arr =[]
   for(let i=1;i<num;i++){
      if(num%i==0){
        arr.push(i)
      }
   }
   let sum =arr.reduce((a,b)=>a+b,0)
   if(sum==num){
      return true
   }else{
      return false
   }
};