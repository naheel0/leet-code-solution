function isPowerOfFour(n: number): boolean {
    if(n<=0){
        return false;
    }else{
        if((n & (n - 1)) == 0 && n % 3 == 1){
            return true
        }else{
            return false
        }
    }
};