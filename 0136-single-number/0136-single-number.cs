public class Solution {
    public int SingleNumber(int[] nums) {
        var arr = nums
        .Where(num => nums.Count(x => x == num) == 1)
        .ToArray();

    return int.Parse(string.Join("", arr));
    }
}