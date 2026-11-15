public class Solution {
    public int RomanToInt(string s) {
        Dictionary<char, int> values = new Dictionary<char, int>
        {
            { 'I', 1 },
            { 'V', 5 },
            { 'X', 10 },
            { 'L', 50 },
            { 'C', 100 },
            { 'D', 500 },
            { 'M', 1000 }
        };

        int result = 0;

        for (int i = 0; i < s.Length; i++) {
            if (i < s.Length - 1 && values[s[i]] < values[s[i + 1]]) {
                result -= values[s[i]];
            } 
            else {
                result += values[s[i]];
            }
        }

        return result;
    }
}