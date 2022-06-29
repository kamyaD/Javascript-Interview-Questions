/* 

Question: URLify: Write a method to replace spaces in a string with "%20".
complexity Big(On)
*/

const URLify = (str, n)=>{
    let newStr = " ";
    for(let i=0; i<n; i++){
        if(str[i]===" ")
            newStr +="%20";
        else
            newStr +=str[i];
    }
    return newStr;
}

console.log(URLify("kamya semakula domnick", 22))