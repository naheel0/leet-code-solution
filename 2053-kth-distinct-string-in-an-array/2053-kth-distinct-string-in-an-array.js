/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let dist=arr.filter(item=>arr.indexOf(item)===arr.lastIndexOf(item));
    if(k>dist.length){
        return "";
    }else{
        return dist[k-1]
    }
};