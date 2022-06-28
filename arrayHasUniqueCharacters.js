/*
Question: implement an algorithm to determine if array has unique characters
- take a string, turn the string to an object,
- if the value of an object is greater than 1 return false else return true
*/

const uniqueCharacters = (string)=>{
    const obj={};
    for(let i of string)
        (!obj[i])? obj[i]=1:obj[i]++;

    for(let t in obj)
      if (obj[t]>1){
          return false
      }
      return true
}

console.log(uniqueCharacters("domiseak"));

