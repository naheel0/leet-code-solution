function separateDigits(nums: number[]): number[] {
    let num=nums.join("");
    let answer=num.split("");
    return answer.map(Number);
};