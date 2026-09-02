/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let match=0;
    while(n>1){
        if(n%2==0){
           match+=n / 2 
           n=n/2 
        }else{
            match+=(n - 1) / 2 + 1
            n=(n - 1) / 2
        }
    }
    return match;
};