function sortArrayByParity(nums: number[]): number[] {
    let l=0;
    let r=nums.length-1;
    let res=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            res[l]=nums[i]
            l++;
        }else{
            res[r]=nums[i]
            r--;
        }
    }
    return res;
};