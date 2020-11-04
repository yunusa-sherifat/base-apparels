const userEmail = document.getElementById('email');
const btnIcon = document.getElementById('btn');
const errorIcon = document.getElementById('err-icon');
const errorText = document.getElementById('err-txt');

btnIcon.addEventListener('click', validateEmail)
function validateEmail() {
  let input = userEmail.value;
  const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regResponse = reg.test(input);
  if(!regResponse) {
    errorIcon.style.display = 'block';
    errorText.style.display = 'block';
  } else {
    errorIcon.style.display = 'none';
    errorText.style.display = 'none';
  }
}