function countWords(words1: string[], words2: string[]): number {
    let result=0;
    let Word1=words1.filter((item)=>words1.indexOf(item)==words1.lastIndexOf(item));
    let Word2=words2.filter((item)=>words2.indexOf(item)==words2.lastIndexOf(item));
    for(let i=0;i<words1.length;i++){
        if (Word2.includes(Word1[i])) result++;
    }
    return result;

};