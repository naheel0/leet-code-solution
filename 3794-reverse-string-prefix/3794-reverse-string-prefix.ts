function reversePrefix(s: string, k: number): string {
    let smallString=s.slice(0,k)
    let revString=smallString.split('').reverse().join('');
    let bigString=s.slice(k)
    let result=revString+bigString;
    return result
};