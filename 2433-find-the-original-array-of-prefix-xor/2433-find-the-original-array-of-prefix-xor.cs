public class Solution {
    public int[] FindArray(int[] pref) {
        int [] arr=new int [pref.Length];
        arr[0]=pref[0];
        for(int i=1;i<pref.Length;i++){
            arr[i]=(pref[i-1]^pref[i]);
        }
        return arr;
    }
}