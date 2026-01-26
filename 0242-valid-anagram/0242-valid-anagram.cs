public class Solution {
    public bool IsAnagram(string s, string t) {
        string S = string.Concat(s.OrderBy(c => c));
        string T = string.Concat(t.OrderBy(c => c));
        if(S==T){
            return true;
        }else{
            return false;
        }


    }
}