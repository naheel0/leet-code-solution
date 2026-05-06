public class Solution {
    public int MinimumSum(int[] nums) {
        int sum = int.MaxValue;
    for (int i = 0; i < nums.Length; i++) {
        for (int j = i + 1; j < nums.Length; j++) {
            for (int k = j + 1; k < nums.Length; k++) {
                int currentsum = 0;
                if (nums[i] < nums[j] && nums[k] < nums[j]) {
                    currentsum = nums[i] + nums[j] + nums[k];
                    if (currentsum < sum) sum = currentsum;
                }
            }
        }
    }
    return sum == int.MaxValue ? -1 : sum;
    }
}