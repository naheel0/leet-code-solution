public class Solution {
    public string ReverseWords(string s) {
       List<string> result=new List<string>();
       string[] words=s.Split(' ');
       for(int i=0;i<words.Length;i++){
        string RevWord=new string(words[i].Reverse().ToArray());
        result.Add(RevWord);
       }
       return string.Join(" ",result);
    }
}