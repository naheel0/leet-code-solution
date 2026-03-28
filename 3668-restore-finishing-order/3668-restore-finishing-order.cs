public class Solution {
    public int[] RecoverOrder(int[] order, int[] friends) {
        List<int> result = new List<int>();
        for(int i=0;i<order.Length;i++){
            for(int j=0;j<friends.Length;j++){
                if(order[i]==friends[j]){
                   result.Add(order[i]);
                }
            }
        }
        return result.ToArray();
    }
}