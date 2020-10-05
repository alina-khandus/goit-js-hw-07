'use strict';

const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const fontSizeChange = function () {
  console.log(range.value);
  text.style.fontSize = `${range.value}px`;
};
text.style.fontSize = `${range.value}px`;
range.addEventListener('input', fontSizeChange);
