/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let result=[];
    let arr=nums.sort((a,b)=>a-b)
    let f=arr[0]
    let l=arr[arr.length-1]
    for(let i=f;i<l;i++){
        if(nums.includes(i)== false){
            result.push(i);
        }
    }
    return result;
};