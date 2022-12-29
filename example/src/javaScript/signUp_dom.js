const body = document.querySelector("body");
body.innerHTML = `<main class="main-block">
      <form class="sign-up">
        <h1>Sign Up Page</h1>
        <div class="form-value form-email">
          <p class="email-msg" id="error-msg"></p>
          <label for="email">Email:</label>
          <input
            type="email"
            id="email-input"
            placeholder="username@somewhere.sth"
          />
        </div>
        <div class="form-value form-user">
          <p class="user-msg" id="error-msg"></p>
          <label for="user">Username:</label>
          <input type="text" id="user" placeholder="user name" />
        </div>
        <div class="form-value form-password">
          <p class="password-msg" id="error-msg"></p>
          <label for="password">Password:</label>
          <input type="password" id="password-input" placeholder="password" />
        </div>
        <div class="form-value form-confirm">
          <p class="confirm-msg" id="error-msg"></p>
          <label for="confirm">Confirm :</label>
          <input
            type="password"
            id="confirm-password-input"
            placeholder="confirm password"
          />
        </div>

        <div class="button-group">
          <button type="submit">Sign up</button>
          <button type="reset">Reset</button>
        </div>

        <p class="sign-up__info"></p>
        <a href="#">Back to index page</a>
      </form>
    </main>`;

const formSignUp = document.querySelector(".sign-up");
const email = document.getElementById("email-input");
const username = document.getElementById("user");
const password = document.getElementById("password-input");
const confirmPassword = document.getElementById("confirm-password-input");

const emailValidate = (input) => {
  const messEmail = document.querySelector(".email-msg");
  const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (input.value === "") {
    messEmail.innerText = "Email is empty !";
    return false;
  } else if (validRegex.test(input.value)) {
    messEmail.innerText = "";
    return true;
  } else {
    console.log("here");
    messEmail.innerText =
      "Email address wrong format. example: username@somewhere.sth";
    return false;
  }
};

const usernameValidate = (username) => {
  const messUser = document.querySelector(".user-msg");
  const validRegex = /^[A-Za-z][A-Za-z0-9_]{7,30}$/;

  if (validRegex.test(username.value)) {
    messUser.innerText = "";
    return true;
  } else if (username.value === "") {
    messUser.innerText = "Username is empty !";
    return false;
  } else if (username.value.length > 30) {
    messUser.innerText = "Username too long, limit 30 characters";
  } else {
    messUser.innerText =
      "Username is invalid. Be sure it does not contain strange symbols or extra spaces anywhere";
    return false;
  }
};

const passwordValidate = (password) => {
  const messPassword = document.querySelector(".password-msg");
  const validRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (password.value === "") {
    messPassword.innerText = "Password is empty !";
    return false;
  } else if (password.value.length < 8) {
    messPassword.innerText = "Password to short, much longer than 8 characters";
    return false;
  } else if (validRegex.test(password.value)) {
    messPassword.innerText = "";
    return true;
  } else {
    messPassword.innerText =
      "Password is invalid. It must contain letters and at least one digit";
    return false;
  }
};

const confirmPassValidate = (password, confirmPassword) => {
  const messConfirm = document.querySelector(".confirm-msg");

  if (confirmPassword.value === "") {
    messConfirm.innerText = "Confirm Password is empty !";
    return false;
  } else if (password.value === confirmPassword.value) {
    messConfirm.innerText = "";
    return true;
  } else {
    messConfirm.innerText = "Password confirm isn't matches the password";
    return false;
  }
};

const validate = (event) => {
  event.preventDefault();

  const formInfo = document.querySelector(".sign-up__info");
  const emailValidation = emailValidate(email);
  const usernameValidation = usernameValidate(username);
  const passwordValidation = passwordValidate(password);
  const passwordConfirmValidation = confirmPassValidate(
    password,
    confirmPassword
  );

  if (
    emailValidation === true &&
    usernameValidation === true &&
    passwordValidation === true &&
    passwordConfirmValidation === true
  ) {
    formInfo.innerText = `Email: ${email.value}
    Username: ${username.value}
    Password: ${password.value}
    Confirm: ${confirmPassword.value}`;

    formInfo.style.color = "#53aa53";
  } else {
    formInfo.innerText = `Invalid information`;
    formInfo.style.color = "#ed4337";
  }
};

const reset = () => {
  window.location.reload();
};

formSignUp.addEventListener("submit", validate);
formSignUp.addEventListener("reset", reset);
