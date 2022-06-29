/*
Question: Given a string, str, write a method to check if its a plindrome permutation
    Algorithm
- Remove the white spaces
- Create Object map of string 
- check if string length is odd --Return FALSE 
- If string is even --- return FALSE if there is not an even number character count of each character
- return TRUE
*/

const isObj=(str)=>{
    let obj={}
    for(let char of str)
        (!obj[char]) ? obj[char]=1 : obj[char]++;
    return obj;

}
const perlindromePermutation = (str)=>{
    // remove white spaces btwn strings
   str=str.replace(/ +/g, "");
    //creating object
    const obj = isObj(str);
    // check if odd
    if(str.length % 2 ===1){
        // return false if more than one odd number character
        let counter =0;
        for(let i of str){
            if(obj[i] % 2 === 1 || obj[i]===1)
                counter++;
            if(counter>1)
                return false;
        }


    }else{
        // Even
        for(let i of str){
            if(obj[i]%2 !==0)
                return false;
        }
    }

    return true;
    
  
}

console.log(perlindromePermutation("PUIPIP"))