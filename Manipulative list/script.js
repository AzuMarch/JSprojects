'use strict';

const input = document.querySelector('input[name=todo]');
const inputEdit = document.querySelector('input[name=edit]');
const ul = document.querySelector('ul');

input.addEventListener('keyup', onKey);

function onKey(event) {
  const value = input.value.trim();

  if (event.keyCode === 13 && value) {
    const li = createLiElement(value);
    ul.appendChild(li);

    input.value = '';

  }
}

function createLiElement(text) {
  const li = document.createElement('li');
  const textNode = document.createTextNode(text);
  li.appendChild(textNode);

  const delBtn = createBtn('Delete', removeLi);
  delBtn.style.color = '#c15353';
  li.appendChild(delBtn);

  const editBtn = createBtn('Edit', editLi);
  li.appendChild(editBtn);

  return li;
}

function createBtn(text, handler) {
  const btn = document.createElement('button');
  btn.appendChild(document.createTextNode(text));
  btn.addEventListener('click', handler);

  return btn;
}

function removeLi(event) {
  let closestLi = event.target.closest('li');
  closestLi.classList.add('DelTransition');
  setTimeout(pop, 500);

  function pop() {
    closestLi.remove();
  }
}

function editLi(event) {
  let targetText = event.target.closest('li').firstChild;
  inputEdit.style.display = 'block';
  inputEdit.value = targetText.textContent;
  inputEdit.focus();

  function getEditInput(event) {
    if (event.keyCode === 13 && inputEdit.value.trim()) {
      targetText.textContent = inputEdit.value.trim();
      inputEdit.value = "";
      inputEdit.style.display = 'none';

      inputEdit.removeEventListener('keyup', getEditInput);
    }
  }

  inputEdit.addEventListener('keyup', getEditInput);
}
