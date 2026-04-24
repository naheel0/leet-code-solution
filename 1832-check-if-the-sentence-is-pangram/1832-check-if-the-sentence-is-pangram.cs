public class Solution {
    public bool CheckIfPangram(string sentence) {
        string alphabet = "abcdefghijklmnopqrstuvwxyz";
        string NewSentence= new string(sentence.Distinct().OrderBy(c => c).ToArray());
        return NewSentence.Contains(alphabet);
    }
}