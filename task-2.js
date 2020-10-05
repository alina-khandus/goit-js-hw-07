'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let listItem = ingredients.map(ingredient => {
  const temp = document.createElement('li');
  temp.textContent = ingredient;
  return temp;
});

console.log(listItem);

const listEl = document.querySelector('ul');
listEl.append(...listItem);

console.log(listEl);
