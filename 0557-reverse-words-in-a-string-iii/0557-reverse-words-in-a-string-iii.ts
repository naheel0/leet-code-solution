function reverseWords(s: string): string {
    let words=s.split(" ");
   let result=[];
   for(let i=0;i<words.length;i++){
    let revWord=words[i].split("").reverse().join("");
    result.push(revWord);
   }
   return result.join(" ");
};