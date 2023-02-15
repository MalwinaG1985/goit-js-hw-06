const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listTask = document.querySelector('#ingredients');

const listItemElem = ingredients.map((ingredient) =>{
  const itemElem = document.createElement('li');
  itemElem.textContent = `${ingredient}`;
  itemElem.classList.add('item');
  return itemElem;
});

listTask.append(...listItemElem);
console.log(listItemElem);
