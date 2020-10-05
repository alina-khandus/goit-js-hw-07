'use strict';

let input = document.getElementById('name-input');
let оutput = document.getElementById('name-output');

input.oninput = function () {
  if (input.value === '') {
    оutput.innerHTML = 'незнакомец';
  } else {
    оutput.innerHTML = input.value;
  }
};
