'use strict';
console.log('proof of life to test out forms');

var userForm = document.getElementById('user-form');
userForm.addEventListener('submit',handleSubmit, false);

function handleSubmit(event) {
  event.preventDefault();
  var name = event.target.inputElementName.value; 
  var age = event.target.inputElementAge.value;
  console.log('this is name', name, 
  'this is age:', age);
}