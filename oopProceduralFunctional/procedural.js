/* 
As we mentioned, in procedural everything is going to be executed from top to bottom.
 before we start, we need to understand what we have to do ?
 well, we have form that creates a user, so we need an event to listen 
 also we need inputs value such as username and password

*/

const form = document.getElementById("form-inputs");
// const username = document.getElementById("user-input");
// const password = document.getElementById("password-input");
// console.log(form);
// console.log(username);
// console.log(password);

// even tho, we are using procedural we are allowed to use functions
function createUser(event) {
  event.preventDefault();
  const username = document.getElementById("user-input");
  const getUsernameValue = username.value;

  const password = document.getElementById("password-input");
  const getPasswordValue = password.value;

  const user = {
    username: getUsernameValue,
    password: getPasswordValue,
  };

  console.log(user);
}

form.addEventListener("submit", createUser);

/*
As you can see, there is nothing wrong with approach, the code gets executed 
from to top to bottom and everything went the way we want, but we can think of a different 
way to organize our code.
*/
