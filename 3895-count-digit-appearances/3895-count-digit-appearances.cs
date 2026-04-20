public class Solution {
    public int CountDigitOccurrences(int[] nums, int digit) {
        string num=string.Concat(nums);
        int result=0;
        for(int i=0;i<num.Length;i++){
            if(num[i]-'0'==digit) result++;
        }
        return result;
    }
}