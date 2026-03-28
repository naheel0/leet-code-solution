function recoverOrder(order: number[], friends: number[]): number[] {
    let result =[]
    let friendSet =new Set(friends)
    for(let i=0;i<order.length;i++){
        if(friendSet.has(order[i])){
            result.push(order[i])
        }
    }
    return result
};