public class Solution {
    public int DifferenceOfSums(int n, int m) {
        int divTotal=0;
        int noDivTotal=0;
        for(int i=0;i<=n;i++){
            if(i%m==0){
                divTotal+=i;
            }else{
                noDivTotal+=i;
            }
        }
        return noDivTotal-divTotal;
    }
}