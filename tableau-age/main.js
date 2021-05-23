let myName = prompt('écris ton nom : ');
let currentDate = new Date(); 
let thisMonth = currentDate.getMonth()+1;
let thisYear = currentDate.getFullYear();
console.log(currentDate);
console.log(thisMonth);
console.log(thisYear);

let myBirthDate = prompt('écris ton année de naissance: ');
let myBirthMonth = prompt('écris ton mois de naissance: ');
let myAge = thisYear-myBirthDate;
document.getElementById('container').innerHTML = '<p>bonjour '+ myName +' !</p>'+'<p>Tu as '+ myAge+' ans.</p>';

