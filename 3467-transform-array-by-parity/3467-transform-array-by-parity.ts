function transformArray(nums: number[]): number[] {
    let result=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            result.push(0);
        }else{
            result.push(1);
        }
    }
    return result.sort((a,b)=>a-b);
};