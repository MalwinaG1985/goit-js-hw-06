let counterValue = 0;
const btnDown = document.querySelector("button[data-action ='decrement']");
const btnUp = document.querySelector("button[data-action = 'increment']");
const boxCounter = document.querySelector("#value");

const countBtnDown = function() {
  counterValue -=1;
  boxCounter.textContent = counterValue;
};
const countBtnUp = function() {
  counterValue +=1;
  boxCounter.textContent = counterValue;
};
btnDown.addEventListener("click", countBtnDown);
btnUp.addEventListener("click", countBtnUp);
console.log(btnDown);
console.log(btnUp)
