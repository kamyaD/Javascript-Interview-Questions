// a palindrome is a word that results to the same word when reversed
/* Algorithm
1. reverse the string
2. Check with the original string if its the same
*/

const palindrome = (string)=>{
    let isPalindrome = string.split("").reverse().join("");
    console.log(isPalindrome === string);     
}

palindrome("hannah");
