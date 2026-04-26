public class Solution {
    public int EarliestTime(int[][] tasks) {
       List<int> times=new List<int>();
       for(int i=0;i<tasks.Length;i++){
         int time=tasks[i].Aggregate((a,b)=>a+b);
         times.Add(time);
       }
        times.Sort((a,b)=>a-b);
        return times[0];
    }
}