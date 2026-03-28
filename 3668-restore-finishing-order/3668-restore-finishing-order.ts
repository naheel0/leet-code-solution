function recoverOrder(order: number[], friends: number[]): number[] {
    let result =[]
    for(let i=0;i<order.length;i++){
        for(let j=0;j<friends.length;j++){
            if(order[i]==friends[j]){
                result.push(order[i])
            }
        }
    }
    return result
};