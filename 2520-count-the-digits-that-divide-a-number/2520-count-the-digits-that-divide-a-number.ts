function countDigits(num: number): number {
     let value=num.toString().split("");
    let result=0;
    for(let i=0;i<=value.length;i++){
        if(num% Number(value[i])==0) result++
    }
    return result;
};