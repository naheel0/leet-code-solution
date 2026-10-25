function plusOne(digits: number[]): number[] {
    let num =digits.join("");
    let newnum =BigInt(num);
    newnum ++;
    let numArr =newnum.toString().split("").map(Number);
    return numArr;
};