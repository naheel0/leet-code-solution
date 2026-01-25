public class Solution {
    public int[] PlusOne(int[] digits) {
        BigInteger number =0;
        foreach(int digit in digits){
            number=number*10+digit;
        }
         number+=1;
        int[] result=number
        .ToString()
        .Select(c => int.Parse(c.ToString()))
        .ToArray();
        return result;
    }
}