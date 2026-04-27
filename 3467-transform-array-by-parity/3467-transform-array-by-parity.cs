public class Solution {
    public int[] TransformArray(int[] nums) {
        List<int> result=new List<int>();
        for(int i=0;i<nums.Length;i++){
            if(nums[i]%2==0){
                result.Add(0);
            }else{
                result.Add(1);
            }
        }
        result.Sort();
        return  result.ToArray();
    }
}