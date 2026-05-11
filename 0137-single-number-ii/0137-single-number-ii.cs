public class Solution {
    public int SingleNumber(int[] nums) {
    int result=0;
    for(int i=0;i<nums.Length;i++){
        if(Array.IndexOf(nums,nums[i])==Array.LastIndexOf(nums,nums[i])) result=(nums[i]); 
    }
    return result;  
    }
}