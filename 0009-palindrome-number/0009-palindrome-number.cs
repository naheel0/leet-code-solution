public class Solution {
    public bool IsPalindrome(int x) {
       
    string numStr = x.ToString();
    string reversedStr = new string(numStr.Reverse().ToArray());

    return numStr == reversedStr;
    }
}