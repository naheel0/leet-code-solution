/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let output=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            output.push(0);
        }else{
            output.push(1)
        }
    }
    let result=output.sort((a,b)=>a-b);
    return result;
};