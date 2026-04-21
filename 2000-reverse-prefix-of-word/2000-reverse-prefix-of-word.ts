function reversePrefix(word: string, ch: string): string {
    let index=word.indexOf(ch);
    let firstWord = word.slice(0, index+1).split("").reverse().join("");
    let secondWord=word.slice(index+1);
    let result =firstWord+secondWord;
    return result;
};