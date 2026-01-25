public class Solution {
    public int LengthOfLastWord(string s) {
        string[] word =s.Trim().Split(" ");
        string lastWord=word[word.Length-1];
        return lastWord.Length;
    }
}