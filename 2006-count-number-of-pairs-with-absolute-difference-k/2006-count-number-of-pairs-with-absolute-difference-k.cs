public class Solution {
    public int CountKDifference(int[] nums, int k) {
    int count=0;
    for(int i=0;i<nums.Length;i++){
        for(int j=0;j<nums.Length;j++){
            if(nums[i]-nums[j]==k)count ++;
        }
    }
    return count;
    }
}