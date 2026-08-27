public class Solution {
    public int RemoveDuplicates(int[] nums) {
      int[] unique = nums.Distinct().ToArray();
      for(int i=0;i<unique.Length;i++){
       nums[i]=unique[i];
  }
  return unique.Length;
  
    }
}