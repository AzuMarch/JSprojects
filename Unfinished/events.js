'use strict';

const input = document.querySelector('input[name=todo]');
const ul = document.querySelector('ul');

let name;

input.addEventListener('keyup', onKey);

function onKey(event) {
  const value = input.value.trim();

  if (event.keyCode === 13 && value) {
    name = value;
    const li = createLiElement(value);
    ul.appendChild(li);

    const textNode = document.createTextNode(value);
    h2.appendChild(textNode);

    input.remove();

  }
}

function createArticle(text) {
  const li = document.createElement('li');

  return li;
}
