function checkPerfectNumber(num: number): boolean {
    let arr =[]
   for(let i=1;i<num;i++){
      if(num%i==0){
        arr.push(i)
      }
   }
   let sum =arr.reduce((a,b)=>a+b,0)
   if(sum==num){
      return true
   }else{
      return false
   }
};