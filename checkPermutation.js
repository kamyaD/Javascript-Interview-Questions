/*
                        Check Permutation
- given two strings, write a method to decide if one is a permutation of the other

    Algorithm:
1. Check if they are the same exact string -else
2. Check the length of both strings - else
3. Check if the objects character are equal - else
4 return true
*/

const IsObj = (str)=>{
    let obj={}
    for(let char of  str)
        (!obj[char]) ? obj[char]=1 : obj[char] ++;
    return obj;

}

const isPermutation = (string1, string2)=>{
    if(string1 === string2)
        return true
    else {
        if(string1.length !== string2.length)
            return false
        else{
            let str1Obj = IsObj(string1);
            let str2Obj = IsObj(string2);

            for(let char in str1Obj){
                if(str1Obj[char] !==str2Obj[char])
                    return false
            }
        }
    }

    return true;
   
}

console.log(isPermutation("kamya", "domck"));