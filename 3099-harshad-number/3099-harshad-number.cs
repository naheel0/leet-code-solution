public class Solution {
    public int SumOfTheDigitsOfHarshadNumber(int x) {
      int sum = x.ToString()
              .Select(c => c - '0')
              .Sum();

    return x % sum == 0 ? sum : -1;  
    }
}