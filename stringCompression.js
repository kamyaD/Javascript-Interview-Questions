/*
Question: Implement a method to perform a basic string compression using the counts of repeated characters.

for example,
"aabcccccaaa" => "a2b1c5a3"
"abcd" =>  "abcd"

---------Algorithm---------
1. We need a count variable to keep track of each character (count=1)
1b We also need another count variable for cases when each character are unique
2. loop(
    - if arr[i] = arr[i+1], count++
    - increment i
    - else output: a[i]+count
    - uniqueCount++
    - count = 1
)
3. if uniqueCount = str length then return str
*/

const stringCompression= (str)=>{
    const n = str.length;
    let count =1; output=''; uniqueCount=0;
    for(let i=0; i<n; i++){
        if(str[i]===str[i + 1])
            count++;
        else{
            output +=str[i]+count;
            count = 1;
            uniqueCount ++;
        }
    }
    if(uniqueCount===n) return str;
    else return output;
}

console.log({
    'aabcccccaaa': stringCompression('aabcccccaaa'),
    'abcd': stringCompression('abcd')
})