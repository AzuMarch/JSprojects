'use strict';

let rapLyrics = [
  {
    word : 'Nibba',
    naughty : true
  },
  {
    word : 'Cash',
    naughty: false
  },
  {
    word: 'Bitches',
    naughty: true
  },
  {
    word: 'Lean',
    naughty: false
  },
  {
    word: 'Lean',
    naughty: false
  },
  {
    word: 'Coke',
    naughty: true
  },
  {
    word: 'Strap',
    naughty: false
  },
  {
    word: 'Whip',
    naughty: false
  }
];

let age = prompt('Enter your age:');
let input = prompt('Search for lyrics:');

// Counts the times the lyric is used if it exists
function getLyrics(value) {
  return value.word === input;
}

const result = rapLyrics.filter(getLyrics);

console.log(
  result.length ? input + ' Times used: ' + result.length : 'Nothing found'
);

// Removes naughty lyrics if the user is under 18
function censorLyrics(value) {
  return !value.naughty;
}

let wordArray = age < 18 ? rapLyrics.filter(censorLyrics) : rapLyrics;

// Gets the actual words of the objects
function getWords(value) {
  return value.word;
}

let outputArray = wordArray.map(getWords);

const p = document.createElement('p');
const text = document.createTextNode(outputArray.join(' '));
p.appendChild(text);
document.body.appendChild(p);
