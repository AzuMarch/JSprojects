'use strict';

const input = document.querySelector('input[name=name]');
input.setAttribute('data-id', 1);
input.getAttribute('data-id')

const form = input.closest('form');
