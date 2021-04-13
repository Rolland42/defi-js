const input = document.getElementById("input") ;
console.log(input);
const checkbox = document.getElementById('checkbox');
console.log(checkbox);
checkbox.addEventListener('click', function() {
  
    if(input.type == 'password'){
        input.type = 'text';
        display.innerHTML = 'Show';
    }
    else{ display.innerHTML = 'Hide';
          input.type = 'password';
          
    }

  });
 
   