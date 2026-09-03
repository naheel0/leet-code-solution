/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num >= 10) {
        const nums = num.toString().split("");
        num = nums.reduce((total, digit) => total + Number(digit), 0);
    }

    return num;
};