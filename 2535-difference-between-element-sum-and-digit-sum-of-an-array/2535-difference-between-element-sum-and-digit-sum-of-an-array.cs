public class Solution {
    public int DifferenceOfSum(int[] nums) {
        int elementSum=nums.Aggregate((a,b)=>a+b);
        var numsInDigit=string.Join("", nums).ToCharArray();
        int digitSum=0;
        for(int i=0;i<numsInDigit.Length;i++){
            digitSum+=numsInDigit[i]-'0';
        }
        return elementSum-digitSum;
    }
}