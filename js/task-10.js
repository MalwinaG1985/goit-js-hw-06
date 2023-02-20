function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
console.log(input);
const btnCreate = document.querySelector('#controls button[data-create]');
console.log(btnCreate);
const btnDestroy = document.querySelector('#controls button[data-destroy]');
console.log(btnDestroy);
const boxes = document.querySelector('#boxes');
console.log(boxes);

btnCreate.addEventListener('click', onBtnCreate);
function onBtnCreate(){
  createBoxes(Number(input.value));
}

btnDestroy.addEventListener('click', () => {
  input.value = '';
  boxes.innerHTML = '';
} );

function createBoxes(amount) {
  let newB = ``;

  for (let i = 0; i < amount; i += 1) {
    newB += `<div style="background-color: ${getRandomHexColor()}"></div>`;
  }
  
  boxes.insertAdjacentHTML('afterbegin', newB);

  const arr = [...boxes.children];
  arr.forEach((div, index) => {
    div.style.width = `${30 + 10 * (index + 1)}px`;
    div.style.height = `${30 + 10 * (index + 1)}px`;
  });
};