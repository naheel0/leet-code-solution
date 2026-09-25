function kthDistinct(arr: string[], k: number): string {
    let dis=arr.filter((a)=>arr.indexOf(a)===arr.lastIndexOf(a));
    if(k>dis.length) return "";
    return dis[k-1]
};