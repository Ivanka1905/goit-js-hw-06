function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector('.change-color');
const backGround = document.querySelector('body');
const changeText = document.querySelector('.color')
btn.addEventListener('click', changeColor);
function changeColor(event) {
  const colorEl = getRandomHexColor;
  backGround.style.backgroundColor = colorEl();
  changeText.textContent = colorEl();
}

// done