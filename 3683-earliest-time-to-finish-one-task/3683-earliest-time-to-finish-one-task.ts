function earliestTime(tasks: number[][]): number {
    let times=[];
    for(let i=0;i<tasks.length;i++){
        let time=tasks[i].reduce((a,b)=>a+b);
        times.push(time)
    }
    let result=times.sort((a,b)=>a-b);
    return result[0];
};