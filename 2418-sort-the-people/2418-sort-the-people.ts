function sortPeople(names: string[], heights: number[]): string[] {
    let peoples=[]
    for(let i=0;i<names.length;i++){
        peoples.push([names[i],heights[i]]);
    }
    let sortPeoples =peoples.sort((a,b)=> b[1]-a[1]);
    let result=sortPeoples.map(p=>p[0]);
    return result;
};