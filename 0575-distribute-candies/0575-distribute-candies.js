/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
      let uniqueCandy =[...new Set(candyType)]
    let candies =candyType.length
     let half =candies/2
     let result=Math.min(uniqueCandy.length,half)
     return result
};