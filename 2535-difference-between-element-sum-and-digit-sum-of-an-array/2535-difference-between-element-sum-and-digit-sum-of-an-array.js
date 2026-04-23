/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum=nums.reduce((a,b)=>a+b);
    let numsInDigit=nums.join("").split("");
    let digitSum=0;
    for(let i=0;i<numsInDigit.length;i++){
        digitSum+=Number(numsInDigit[i]);
    }
    return elementSum-digitSum;
};