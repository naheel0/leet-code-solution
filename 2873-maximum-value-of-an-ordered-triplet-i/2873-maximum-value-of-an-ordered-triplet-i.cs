public class Solution {
    public long MaximumTripletValue(int[] nums) {
    long sum=0;
    for(int i=0;i<nums.Length;i++){
        for(int j=i+1;j<nums.Length;j++){
            for(int k=j+1;k<nums.Length;k++){
                long currentSum=((long)nums[i]-nums[j])*nums[k];
                if(currentSum>sum)sum=currentSum;
            }
        }
    }
    return sum;
    }
}