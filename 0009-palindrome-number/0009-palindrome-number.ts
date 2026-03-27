function isPalindrome(x: number): boolean {
    let numstr = x.toString()
    let str =numstr.split("").reverse().join("")
    return numstr==str
};