/*
- create an array called chunked
- get the last array within last ='chunked'
- check if last exists or size last equals to n. if it does exist, then push into 'chunked' else oush into 'last'
- return chuncked
*/

const chunks = ((arr, n)=>{
    const chunked =[];
    for(let element of arr){
        let last = chunked[chunked.length-1];

        if(!last || last.length===n)
           chunked.push([element])
        else
           last.push(element)

    }
    return chunked;

})([1,4,12,3,2,6,-9,0], 8)
console.log(chunks)