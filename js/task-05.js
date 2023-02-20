const nameIn = document.querySelector('#name-input');
const nameOut = document.querySelector('#name-output');

const actualValue = (event) =>{
  console.log(even.currentTarget.value);
  nameOut.textContent = even.currentTarget.value;
  
  if(even.currentTarget.value === '') {
    nameOut.textContent = 'Anonymus'
  }
}
nameIn.addEventListener('input', actualValue);
console.log(nameIn)