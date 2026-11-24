function shuffle(nums: number[], n: number): number[] {
    let y = nums.slice(n);
    let x = nums.slice(0, n)
    let result = []
    for (let i = 0; i < x.length; i++) {
        result.push(x[i], y[i])
    }
    return result
};