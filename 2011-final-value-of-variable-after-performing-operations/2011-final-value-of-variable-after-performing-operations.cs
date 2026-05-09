public class Solution {
    public int FinalValueAfterOperations(string[] operations) {
       int result=0;
    for(int i=0;i<operations.Length;i++){
        if(operations[i]=="--X"||operations[i]=="X--"){
            result--;
        }else if(operations[i]=="++X"|| operations[i]=="X++"){
            result++;
        }
    }
    return result; 
    }
}