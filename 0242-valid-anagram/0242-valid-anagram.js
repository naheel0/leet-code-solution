/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let Sword =s.split("").sort().join("")
    let Tword =t.split("").sort().join("")
    if(Sword==Tword){
        return true
    }else{
        return false
    }
};