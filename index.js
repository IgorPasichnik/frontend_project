export default () => {
  const userInput = document.querySelector("#user");
  const userErrorBlock = document.querySelector(".user-error");
  const emailInput = document.querySelector("#email");
  const emailErrorBlock = document.querySelector(".email-error");
  const passwordInput = document.querySelector("#password");
  const passwordErrorBlock = document.querySelector(".password-error");
  const submitButton = document.querySelector("#submit");
  const form = document.querySelector("form");

  const isUserValid = (user) => {
    return user.length > 4 && user[0] === user[0].toUpperCase();
  };

  const isPasswordValid = (password) => {
    return password.length !== 0 && password.length > 5;
  };

  const isEmailValid = (email) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return regex.test(email);
  };

  userInput.addEventListener("input", (e) => {
    const currentValue = e.target.value;

    const isValid = isUserValid(currentValue);

    if (isValid) {
      userInput.classList.remove("input-error");
      userErrorBlock.classList.add("d-none");
    } else {
      if (currentValue.length === 0) {
        userErrorBlock.textContent = "Имя не может быть пустым";
      } else {
        userErrorBlock.textContent = "Имя не может быть короче 5-и символов";
      }
      userInput.classList.add("input-error");
      userErrorBlock.classList.remove("d-none");
    }
  });

  emailInput.addEventListener("input", (e) => {
    const currentValue = e.target.value;

    const isValid = isEmailValid(currentValue);

    if (isValid) {
      emailInput.classList.remove("input-error");
      emailErrorBlock.classList.add("d-none");
    } else {
      if (currentValue.length === 0) {
        emailErrorBlock.textContent = "Email не может быть пустым";
      } else {
        emailErrorBlock.textContent = "Введите корректный email";
      }
      emailInput.classList.add("input-error");
      emailErrorBlock.classList.remove("d-none");
    }
  });

  passwordInput.addEventListener("input", (e) => {
    const currentValue = e.target.value;

    const isValid = isPasswordValid(currentValue);

    if (isValid) {
      passwordInput.classList.remove("input-error");
      passwordErrorBlock.classList.add("d-none");
    } else {
      if (currentValue.length === 0) {
        passwordErrorBlock.textContent = "Пароль не может быть пустым";
      } else {
        passwordErrorBlock.textContent =
          "Пароль не может быть короче 6-и символов";
      }
      passwordInput.classList.add("input-error");
      passwordErrorBlock.classList.remove("d-none");
    }
  });

  form.addEventListener("input", (e) => {
    const user = form.querySelector("#user").value;
    const email = form.querySelector("#email").value;
    const password = form.querySelector("#password").value;

    if (isUserValid(user) && isEmailValid(email) && isPasswordValid(password)) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
};
