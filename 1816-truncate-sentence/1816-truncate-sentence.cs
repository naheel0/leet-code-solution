public class Solution {
    public string TruncateSentence(string s, int k) {
      string[] word =s.Split(" ");
      return string.Join(" ", word[0..k]);  
    }
}