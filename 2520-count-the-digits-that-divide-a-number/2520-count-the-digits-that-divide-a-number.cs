public class Solution {
    public int CountDigits(int num) {
       int result=0;
       char[] value=num.ToString().ToCharArray();
       for(int i=0;i<value.Length;i++){
        if(num%(value[i]-'0')==0) result++;
       } 
       return result;
    }
}