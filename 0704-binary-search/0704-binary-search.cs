public class Solution {
    public int Search(int[] nums, int target) {
        int minusOne=-1;
        for(int i=0;i<nums.Length;i++){
            if(nums[i]==target){
                return i;
            }
        }
        return minusOne;
    }
}