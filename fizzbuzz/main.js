for (let i = 0; i <= 100; i++) {
    if(!(i%3)&&!(i%5)){
        console.log("fizzbuzz");
    } else if(!(i%3)){
        console.log("fizz");
    }else if (!(i%5)){
        console.log("buzz");
   }else{
    console.log( i );
   }
}

