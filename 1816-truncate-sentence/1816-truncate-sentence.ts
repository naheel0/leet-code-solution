function truncateSentence(s: string, k: number): string {
    let words=s.split(" ");
    return words.slice(0,k).join(" ");
};