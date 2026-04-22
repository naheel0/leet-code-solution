public class Solution {
    public int SubtractProductAndSum(int n) {
        int product=1;
        int sum=0;
        string str=n.ToString();
        for(int i=0;i<str.Length;i++){
            int digit=str[i]-'0';
            product*=digit;
            sum+=digit;
        }
        return product-sum;
    }
}