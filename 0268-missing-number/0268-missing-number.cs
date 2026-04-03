public class Solution {
    public int MissingNumber(int[] nums) {
     int n=nums.Length;
     int sum=0;
     int totalSum=n*(n+1)/2;
     for(int i=0;i<nums.Length;i++){
        sum+=nums[i];
     } 
     return totalSum-sum;  
    }
}