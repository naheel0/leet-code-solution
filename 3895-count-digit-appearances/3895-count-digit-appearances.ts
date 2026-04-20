function countDigitOccurrences(nums: number[], digit: number): number {
    let num=nums.join(",");
    let result=0;
    for(let i=0;i<num.length;i++){
        if(num[i]==digit.toString()){
            result++;
        }
    }
    return result;
};