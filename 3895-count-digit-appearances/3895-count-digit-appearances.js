/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function(nums, digit) {
    let num=nums.join(",");
    let result=0;
    for(let i=0;i<num.length;i++){
        if(num[i]==digit){
            result++;
        }
    }
    return result;
};