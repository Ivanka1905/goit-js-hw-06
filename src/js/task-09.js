function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector('.change-color');
const backGround = document.querySelector('body').style.backgroundColor;
btn.addEventListener('click', changeColor);
function changeColor(event) {
 return event.currentTarget.backGround = getRandomHexColor;
}
