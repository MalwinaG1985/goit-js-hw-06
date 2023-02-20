const form = document.querySelector('.login-form');
console.log(form);

const checkForm = (event) =>{
  event.preventDefault();
  
  const {
    elements: {email, password},
  } = event.currentTarget;
  
  if(email.value ==="" || password.value === "") {
 return alert(`All fields should be completed!`);  
  }
  
  const result = {
    email: email.value,
    password: password.value,
  }
  console.log(result);
  event.currentTarget.reset();
};
form.addEventListener("submit", checkForm);
console.log(form)
