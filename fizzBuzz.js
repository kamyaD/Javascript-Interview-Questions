((num)=>{
    for(let i = 0; i<=num; i++){
        // check for 15
        if (i % 3 == 0 && i%5==0){
            console.log("fizzbuzz");
            i++;
        }
        // Check for 3
        if(i%3==0){
            console.log("fizz");
            i++;
        }
        // check for 5
        if(i%5==0){
            console.log("buzz");
            i++;
        }
        // check for 3
        if(i%3==0){
            console.log("fizz");
            i++
        }
        if(i>num) break;
        console.log(i);

    }
})(45)