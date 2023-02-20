const nameIn = document.querySelector('#name-input');
const nameOut = document.querySelector('#name-output');

const actualValue = (event) =>{
  console.log(event.currentTarget.value);
  nameOut.textContent = event.currentTarget.value;
  
  if(event.currentTarget.value === '') {
    nameOut.textContent = 'Anonymus'
  }
}
nameIn.addEventListener('input', actualValue);
console.log(nameIn)