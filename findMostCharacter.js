// Find the character that appears the most and how many times
/*
- 32eddseew3
- #%he3#33ll#l#o

Algorithm:
1. convert string to array
2. loop through array 

*/

const numberofTimes=(string)=>{
    obj ={}
    for(let char of string)
        (!obj[char]) ? obj[char] =1 : obj[char] ++

    let maxCharacter='';
    let maxNum=0;
    for(let i in obj){
        if(obj[i] >=maxNum){
            maxNum = obj[i];
            maxCharacter= i;

        }
    }
    console.log(`the character that appears the most is ${maxCharacter} and it appears ${maxNum} times`)
}

numberofTimes("#%he3#33ll#l#o");