const myBtn = document.getElementById("myBtn");
var result = document.getElementById("result");

myBtn.addEventListener( 'click' , headsOrTails);

function headsOrTails(){
    /* let random = Math.random(); */
let random = Math.floor(Math.random()*2);
if(random ==1){
    result.innerHTML = 'Heads';
}
else{result.innerHTML = 'Tails';
}
}