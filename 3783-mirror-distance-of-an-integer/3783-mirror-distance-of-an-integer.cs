public class Solution {
    public int MirrorDistance(int n) {
        int rev=int.Parse(new string(n.ToString().Reverse().ToArray()));
        int result=Math.Abs(n-rev);
        return result;
    }
}