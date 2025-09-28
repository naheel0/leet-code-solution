/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let result =0;
    if(x>0){
       result= Number(x.toString().split("").reverse().join(""))
     }else if(x<0){
        let negNum =x.toString().split("").slice(1).reverse()
        result=  Number( "-" + negNum.join(""))
     }else if(x==0){
        result=0
     }
     if (result < -2147483648 || result > 2147483647) {
        return 0;
    }else{
        return result
    }
};