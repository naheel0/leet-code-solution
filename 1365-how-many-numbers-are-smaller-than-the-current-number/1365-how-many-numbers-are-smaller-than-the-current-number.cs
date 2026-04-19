public class Solution {
    public int[] SmallerNumbersThanCurrent(int[] nums) {
        List<int> result=new List<int>();
        for(int i=0;i<nums.Length;i++){
            int numSmall=0;
            for(int j=0;j<nums.Length;j++){
                if(nums[i]>nums[j]){
                    numSmall++;
                }
            }
            result.Add(numSmall);
        }
        return result.ToArray();
    }
}