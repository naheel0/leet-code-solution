public class Solution {
    public string ReversePrefix(string word, char ch) {
        int index= word.IndexOf(ch);
        string firstWord=word[0..(index+1)];
        string firstWordRev=new string(firstWord.Reverse().ToArray());
        string secondWord=word[(index+1)..];
        string result=firstWordRev+secondWord;
        return result;
    }
}