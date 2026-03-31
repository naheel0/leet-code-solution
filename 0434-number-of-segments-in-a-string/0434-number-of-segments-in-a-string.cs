public class Solution {
    public int CountSegments(string s) {
        s=s.Trim();
        if(s=="") return 0;
        string[] arr=s.Split(' ', StringSplitOptions.RemoveEmptyEntries);
        return arr.Length;
    }
}