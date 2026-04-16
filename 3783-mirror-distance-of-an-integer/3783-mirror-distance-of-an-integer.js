/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let rev=n.toString().split('').reverse().join('');
    let result =Math.abs(n-rev);
    return result;
};