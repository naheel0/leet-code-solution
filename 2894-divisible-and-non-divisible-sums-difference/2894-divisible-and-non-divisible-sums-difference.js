/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let divTotal=0;
    let notDivTotal=0;
    for(let i=0;i<=n;i++){
        if(i%m==0){
            divTotal+=i;
        }else{
            notDivTotal+=i
        }
    }
    return notDivTotal-divTotal
};