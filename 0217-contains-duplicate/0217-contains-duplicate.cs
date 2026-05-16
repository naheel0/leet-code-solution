public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        HashSet<int> set=new HashSet<int>(nums);
        return set.Count != nums.Length;
    }
}