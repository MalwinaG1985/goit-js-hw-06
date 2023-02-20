const inputElem = document.querySelector('#validation-input');


const inputFocus = (event) => {
  console.log(event.targer);
  event.target.classList.add('#validation-input');
}
const inputBlur = (event) => {
  const {dataset, value} = event.target;
  const symbolLength = Number(dataset.length);
  
  if(symbolLength === value.length) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
};

inputElem.addEventListener('focus', inputFocus);
inputElem.addEventListener('blur', inputBlur);
