/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function(n) {
    let digitSum=0;
    let squareSum=0;
    let nums=String(n).split("")
    nums.forEach(num=>{
    digitSum+=Number(num)})
    nums.forEach(num=>{
       squareSum+=num*num
    })
    if(squareSum-digitSum>=50){
        return true
    }else{
        return false
    }
};