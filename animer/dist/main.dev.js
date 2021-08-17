"use strict";

var title = document.getElementById('title');
var i = 0;

function changeTitle() {
  if (i == 0) {
    title.innerHTML = 'Je suis web designer!!';
    importScripts = 1;
  } else if (i == 1) {
    title.innerHTML = 'Salut!';
    i = 2;
  }
}

setInterval(changeTitle, 3000);