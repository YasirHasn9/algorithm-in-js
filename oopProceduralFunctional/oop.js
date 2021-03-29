/*
now, we are gonna think in oop programming, which means we are gonna use class and object to 
represent our code.
 */

class Validator {
  static REQUIRED = "REQUIRED";
  static MIN_LENGTH = "MIN_LENGTH";

  static validate(value, flag, validateValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validateValue;
    }
  }
}
class UserInput {
  constructor() {
    this.form = document.getElementById("form-inputs");
    this.usernameInput = document.getElementById("user-input");
    this.passwordInput = document.getElementById("password-input");

    // we bind because the default value of the event will point to the target
    // we prevent that by bind to the same (this) inside the constructor
    this.form.addEventListener("submit", this.signUp.bind(this));
  }

  signUp(e) {
    e.preventDefault();
    let userValue = this.usernameInput.value;
    let passwordValue = this.passwordInput.value;
  }

  //   log = () => {
  //     console.log("looging form the class");
  //     console.log(this.form);
  //     console.log(this.passwordInput);
  //     console.log(this.usernameInput);
  //   };
}
