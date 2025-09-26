/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let binA = BigInt("0b"+a)
  let binB = BigInt("0b"+b)
  let add = binA+ binB
  let result=add.toString(2)
  return result
};