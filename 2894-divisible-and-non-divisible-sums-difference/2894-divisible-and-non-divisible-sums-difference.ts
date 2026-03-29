function differenceOfSums(n: number, m: number): number {
   let divTotal=0;
   let noDivTotal=0;
   for(let i=0;i<=n;i++){
    if(i%m==0){
       divTotal+=i 
    }else{
        noDivTotal+=i
    }
   }
   return noDivTotal-divTotal;
};