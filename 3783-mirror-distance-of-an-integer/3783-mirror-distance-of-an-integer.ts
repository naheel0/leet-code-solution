function mirrorDistance(n: number): number {
    let rev=Number(n.toString().split('').reverse().join(''));
    let result =Math.abs(n-rev);
    return result;
};