import icon from "../../img/icon/icon-arrow-back.png";
import checkPassword from "../auth/checkPassword";
import { aes, items } from "../app";
import loadItems from "../loadItems";
import iconEyePicture from "../../img/icon/icons8-eye-50.png";
import iconEyePictureClose from "../../img/icon/icons8-closed-eye-50.png";

function loginCard(createCard) {
  const loginButton = document.querySelector(".login-button");
  const container = document.querySelector(".list-items");

  const isLocal = localStorage.getItem("passwordhub");
  const blockLogin = document.createDocumentFragment();
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("create-card_title");
  const title = document.createElement("p");
  title.classList.add("create-card__sub-title");
  if (!isLocal) {
    title.textContent = "Создайте пароль";
  } else {
    title.textContent = "Введите пароль для входа"; 
  }
  cardTitle.appendChild(title);
  const backButton = document.createElement("button");
  backButton.classList.add("button-arrow-back");
  // const img = document.createElement("img");
  // img.src = icon;
  // backButton.appendChild(img);
  backButton.addEventListener("click", function (event) {
    createCard.classList.add("hidden-card");
    createCard.innerHTML = "";
  });

  cardTitle.appendChild(backButton);
  blockLogin.appendChild(cardTitle);
  const loginWrapper = document.createElement("form");
  loginWrapper.classList.add("login_wrapper");
  const error = document.createElement("p");
  error.classList.add("error__login", "hidden");
  error.textContent = "Введен некорректный пароль";
  loginWrapper.appendChild(error);
  const inputPass = document.createElement("input");
  inputPass.classList.add("login__input");
  inputPass.placeholder = "Введите пароль";
  inputPass.type = "password";
  loginWrapper.appendChild(inputPass);

  const iconEye = document.createElement("img");
  iconEye.classList.add("icon-eye");
  iconEye.src = iconEyePicture;
  loginWrapper.appendChild(iconEye);

  iconEye.addEventListener("click", function (event) {
    if (inputPass.type === "password") {
      inputPass.type = "text";
      iconEye.src = iconEyePictureClose;
    } else {
      inputPass.type = "password";
      iconEye.src = iconEyePicture;
    }
  });

  const submitButton = document.createElement("button");
  submitButton.classList.add("footer__buttons");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Войти";
  loginWrapper.addEventListener("submit", (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target
      .closest(".login_wrapper")
      .querySelector(".login__input").value;

    if (!isLocal) {
      sessionStorage.setItem("passwordhub", value);
      var crypted = aes.encryptText(JSON.stringify({ data: [] }), value, {
        nBits: 256,
      });
      localStorage.setItem("passwordhub", crypted);
      createCard.innerHTML = "";
      return;
    }

    if (checkPassword(value)) {
      sessionStorage.setItem("passwordhub", value);
      const localItems = checkPassword(value).data;

      localItems.forEach((item) => {
        if (
          items.filter((elem) => {
            return elem.id === item.id;
          }).length === 0
        ) {
          items.push(item);
        }
      });
      container.innerHTML = "";
      loadItems(items);
      if (loginButton) {
        loginButton.textContent = "Выйти";
        loginButton.classList.toggle("login-button");
        loginButton.classList.toggle("logout");
      }
      createCard.innerHTML = "";
      return;
    } else {
      error.classList.remove("hidden");
      setTimeout(() => {
        error.classList.add("hidden");
      }, 2000);
    }
  });
  loginWrapper.appendChild(submitButton);
  blockLogin.appendChild(loginWrapper);
  return blockLogin;
}

export default loginCard;
