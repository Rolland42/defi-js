const input = document.getElementById("input") ;
document.getElementById('checkbox').addEventListener('click', function() {
  
    if(input.type == 'password'){
        input.type = 'text';
        display.innerHTML = 'Show';
    }
    else{ display.innerHTML = 'Hide';
          input.type = 'password';
    }
    
  });
 
   