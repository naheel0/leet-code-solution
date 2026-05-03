public class Solution {
    public int CountQuadruplets(int[] nums) {
       int count=0;
    for(int a=0;a<nums.Length;a++){
        for(int b=a+1;b<nums.Length;b++){
            for(int c=b+1;c<nums.Length;c++){
                for(int d=c+1;d<nums.Length;d++){
                    if(nums[a] + nums[b] + nums[c] == nums[d]) count++;
                }
            }
        }
    } 
    return count;  
    }
}