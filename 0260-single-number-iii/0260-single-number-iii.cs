public class Solution {
    public int[] SingleNumber(int[] nums) {
      List<int> result=new List<int>();
      for(int i=0;i<nums.Length;i++){
        if(Array.IndexOf(nums,nums[i])==Array.LastIndexOf(nums,nums[i])) result.Add(nums[i]); 
    }
    return result.ToArray(); 
    }
}