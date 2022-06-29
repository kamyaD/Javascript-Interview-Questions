/*
 There are three types of edits that can be performed on a string:
 - insert a character
 - remove a character
 - replace a character

 Question: Given two strings, write a method to detrtmine if they are one edit away from each other.
 for example:
 (pale, ple) -> true - insert 'a'
 (pales, pale) ->true - insert 's'
 (pale, kale) -> true - replace 'p' with 'k'
 (pale, pales) -> true - remove 's'
 (pale, bake) -> false - replace 'p' with 'b' and 'i' with 'k'

 Algorithm:
 - if strings are identical - then return false  - zero edits
 - create character maps of both strings
 - check if each character are of same type and value.
 - If the are not, increase the counter,
 - if the counter is 2 or more, then return false
 - return true.
 */

const charMap=(str)=>{
    let obj = {}
    for(let i of str)
        (!obj[i]) ? obj[i]=1 : obj[i]++;
    return obj;

}

const oneAway =(str1, str2)=>{
    if(str1 === str2) return false
    const obj1 = charMap(str1);
    const obj2 = charMap(str2);
    let counter =0;

    for(let i in obj1)
    {
       if(obj1[i] !==obj2[i])
            counter++;
        else if (counter >=2){
            return false;
             
        } 
    }
    return true;

}

console.log(oneAway('pale', 'bake'))