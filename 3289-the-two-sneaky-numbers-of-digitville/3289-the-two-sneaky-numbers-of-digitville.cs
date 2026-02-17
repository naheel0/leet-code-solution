public class Solution {
    public int[] GetSneakyNumbers(int[] nums) {
        List<int> arr =new List<int>();
        for(int i=0;i<nums.Length;i++){
            for(int j=i+1;j<nums.Length;j++){
                if(nums[i]==nums[j]){
                    arr.Add(nums[i]);
                }
            }
        }
        return arr.ToArray();
    }
}