public class Solution {
    public bool ArrayStringsAreEqual(string[] word1, string[] word2) {
       string Word1=string.Join("",word1);
       string Word2=string.Join("",word2);
       return Word1==Word2;
    }
}