public class Solution {
    public int ScoreOfString(string s) {
        int result=0;
    for(int i=0;i<s.Length-1;i++){
        int current=(int)s[i];
        int next=(int)s[i+1];
        result+=Math.Abs(current-next);
    }
    return result;
    }
}