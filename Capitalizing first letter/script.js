'use strict';

let words = "balls to the walls";

const p = document.createElement('p');

function firstCapitalize(words) {
  return words.charAt(0).toUpperCase() + words.slice(1);
}

const text = document.createTextNode(firstCapitalize(words));

p.appendChild(text);
document.body.appendChild(p);
