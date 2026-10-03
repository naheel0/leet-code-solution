/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let i = 0;
    let j = 1;

    while (j < s.length) {
        if (s[i] == s[j]) {
            return s[i];
        }

        i++;

        if (i == j) {
            j++;
            i = 0;
        }
    }
};
