const UserEmail = document.getElementById( 'form' )
const BtnIcon = document.getElementById('btn');
const ErrorIcon = document.getElementById('err-icon');
const ErrorText = document.getElementById('err-txt');

BtnIcon.addEventListener('click', validateEmail)
function validateEmail() {
  let input = userEmail.value;
  const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regResponse = reg.test(input);
  if(!regResponse) {
    ErrorIcon.style.display = 'block';
    ErrorText.style.display = 'block';
  } else {
    ErrorIcon.style.display = 'none';
    ErrorText.style.display = 'none';
  }
}