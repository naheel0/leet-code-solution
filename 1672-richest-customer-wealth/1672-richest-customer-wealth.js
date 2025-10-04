/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richest=""
    for(let i=0;i<accounts.length;i++){
        let currentaccount =accounts[i].reduce((a,b)=>a+b)
        if(currentaccount>richest){
            richest =currentaccount
        }
    }
    return richest
};