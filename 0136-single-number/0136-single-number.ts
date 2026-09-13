function singleNumber(nums: number[]): number {
    let arr= nums.filter((num,_,nums)=>nums.indexOf(num)==nums.lastIndexOf(num))
    return +arr.join("")
};