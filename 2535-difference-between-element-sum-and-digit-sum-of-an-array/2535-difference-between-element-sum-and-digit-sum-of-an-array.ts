function differenceOfSum(nums: number[]): number {
   let elementSum=nums.reduce((a,b)=>a+b,0);
   let numsInDigit=nums.join("").split("");
   let digitSum=numsInDigit.reduce((a,b)=>a+Number(b),0);
   return elementSum - digitSum;
};