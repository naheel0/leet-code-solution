/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let y = nums.slice(n);
     let x = nums.slice(0,n)
    let result =[]
    for(let i=0;i<x.length;i++){
        result.push(x[i],y[i]) 
    }
    return result
};