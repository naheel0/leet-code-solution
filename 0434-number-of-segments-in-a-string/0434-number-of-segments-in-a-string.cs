public class Solution {
    public int CountSegments(string s) {
        if(s.Trim()==""){
            return 0;
        }
        string[] arr=s.Trim().Split(" ");
        return arr.Length;
    }
}