function subtractProductAndSum(n: number): number {
     let product=1;
    let sum=0;
    let str=n.toString();
    for(let i=0;i<str.length;i++){
        let digit=Number(str[i])
        product*=digit;
        sum+=digit;
    }
    return product-sum;
};