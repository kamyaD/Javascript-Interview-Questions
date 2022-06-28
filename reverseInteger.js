/*
Steps:
   1. convert to string
   2. turn into an array
   3. use reverse method
   4. back to string
   5. back to int 
*/

const reverseInt = (i)=>{
    return parseInt(i.toString().split("").reverse().join("").toString());
}

console.log({
    testCase1: reverseInt(-15),
    testCase2: reverseInt(500),
    testCase3: reverseInt(51),
    testCase4: reverseInt(900),

});