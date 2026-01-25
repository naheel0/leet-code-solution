public class Solution {
    public int[] PlusOne(int[] digits) {
        int number =0;
        foreach(int digit in digits){
            number=number*10+digit;
        }
         number+=1;
        int[] result=number
        .ToString()
        .Select(x=>x-'0')
        .ToArray();
        return result;
    }
}