function missingNumber(nums: number[]): number {
    let n=nums.length;
    let arraySum=0;
    let NnumTotal=n*(n+1)/2;
    for(let i=0;i<nums.length;i++){
        arraySum+=nums[i];
    }
    return NnumTotal-arraySum;
};