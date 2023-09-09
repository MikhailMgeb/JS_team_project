import selectNewItem from "./footer/selectNewItem";
import createNewElement from "./container/createItem";
import loginCard from "./footer/loginCard";
import loadItems from "./loadItems";
import checkPassword from "./auth/checkPassword";
import footerEvent from "./footer/footerEvent";
import containerEvent from "./container/containerEvent";
import loadFromLocal from "./local/loadFromLocal";
import findItem from "./header/findItem";

export let items = [];

var pidCrypt = require("pidcrypt");
require("pidcrypt/aes_cbc");
export var aes = new pidCrypt.AES.CBC();

document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector(".login-button");
  if (DARK === localStorage.getItem("theme")) {
    page.classList.add("dark-colors");
  } else {
    page.classList.remove("dark-colors");
  }
  if (sessionStorage.getItem("passwordhub")) {
    const password = sessionStorage.getItem("passwordhub");
    if (checkPassword(password)) {
      const localItems = checkPassword(password).data;
      localItems.forEach((item) => {
        items.push(item);
      });
      loginButton.textContent = "Выйти";
      loginButton.classList.toggle("login-button");
      loginButton.classList.toggle("logout");
      loadItems(items);
      return;
    }
  }
  if (!localStorage.getItem("passwordhub")) {
    const createCard = document.querySelector(".create-card");
    createCard.appendChild(loginCard(createCard));
    createCard.classList.remove("hidden-card");
  } else {
    const createCard = document.querySelector(".create-card");
    createCard.appendChild(loginCard(createCard));
    createCard.classList.remove("hidden-card");
  }
});

const container = document.querySelector(".list-items");
const createCard = document.querySelector(".create-card");
const inputFilter = document.querySelector(".input_filter");

inputFilter.addEventListener("input", (event) => {
  const target = event.target;
  findItem(target);
});

container.addEventListener("click", (event) => {
  event.preventDefault();
  createCard.innerHTML = "";
  const target = event.target;
  containerEvent(target);
  items = loadFromLocal();
});

const footer = document.querySelector(".footer");

footer.addEventListener("click", function (event) {
  const target = event.target;
  footerEvent(target, createCard);
});

createCard.addEventListener("click", (event) => {
  const target = event.target;

  if (!target.dataset.name) {
    return;
  }
  createCard.classList.remove("hidden-card");
  createCard.innerHTML = "";
  createCard.appendChild(
    createNewElement(target.dataset.name, createCard, selectNewItem)
  );
});

// dark-theme
const page = document.querySelector(".page");
const modifyingButton = document.querySelector(".theme-button");
const DARK = "dark";

modifyingButton.addEventListener("click", function () {
  page.classList.toggle("dark-colors");

  if (page.classList.contains("dark-colors")) {
    localStorage.setItem("theme", DARK);
  } else {
    localStorage.removeItem("theme");
  }
});
