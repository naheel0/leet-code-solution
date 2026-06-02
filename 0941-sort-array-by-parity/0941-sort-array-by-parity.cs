public class Solution {
    public int[] SortArrayByParity(int[] nums) {
        int l=0;
        int r=nums.Length-1;
        int [] res= new int [nums.Length];
        for(int i=0;i<nums.Length;i++){
            if(nums[i]%2==0){
                res[l]=nums[i];
                l++;
            }else{
                res[r]=nums[i];
                r--;
            }
        }
        return res;
    }
}