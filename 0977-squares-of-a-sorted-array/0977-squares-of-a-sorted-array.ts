function sortedSquares(nums: number[]): number[] {
    let square =nums.map((a)=>a*a)
    return square.sort((a,b)=>a-b)
};