const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = ingredients.map(ingredient => {
  const elem = document.createElement('li');
  elem.textContent = ingredient;
  elem.classList.add('item');
  return elem;
});

document.querySelector('#ingredients').append(...listEl);

// done