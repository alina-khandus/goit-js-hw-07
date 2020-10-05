'use strict';

const listCategories = document.querySelectorAll('li.item');
console.log(`В списке ${listCategories.length} категории.`);

const itemCategories = [...listCategories]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`,
  )
  .join('\n');
console.log(itemCategories);
