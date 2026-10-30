function removeStars(s: string): string {
    let word = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "*") {
            word.pop();
        } else {
            word.push(s[i]);
        }
    }

    return word.join("");
};