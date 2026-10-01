public class Solution {
    public int DistributeCandies(int[] candyType) {
    HashSet<int> uniqueCandy = new HashSet<int>(candyType);
    int candies = candyType.Length;
    double half = (double)candies / 2;
    int result = Math.Min(uniqueCandy.Count, (int)half);
    return result;
    }
}