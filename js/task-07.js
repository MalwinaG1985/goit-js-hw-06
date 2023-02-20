const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', changes);

function changes(elem) {
  text.style.fontSize = `${elem.target.value}px`;
}