'use strict';

const input = document.querySelector('input[name=todo]');
const inputEdit = document.querySelector('input[name=edit]');
const ul = document.querySelector('ul');
const h2 = document.querySelector('h2');
const vowels = ['a','e','i','o','u'];

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

function createLiElement(text) {
  const li = document.createElement('li');

  const fullNameBtn = createBtn('Full name', e => h2.innerHTML = name);
  li.appendChild(fullNameBtn);

  const vowelBtn = createBtn('Vowels', e =>
  h2.innerHTML = name
  .split('')
  .filter(letter => vowels.find(vowel => letter === vowel))
  .join('')
  );

  li.appendChild(vowelBtn);

  const consonantBtn = createBtn('Consonants', e =>
  h2.innerHTML = name
  .split('')
  .filter(letter => !vowels.find(consonant => letter === consonant))
  .join('')
  );

  li.appendChild(consonantBtn);

  return li;
}

function createBtn(text, handler) {
  const btn = document.createElement('button');
  btn.appendChild(document.createTextNode(text));
  btn.addEventListener('click', handler);

  return btn;
}
