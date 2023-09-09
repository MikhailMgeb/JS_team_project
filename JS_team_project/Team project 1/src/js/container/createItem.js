import newBlockElement from "../newBlockElement";
import loadItems from "../loadItems";
import { aes, items } from "../app";

function createNewElement(entry, createCard, selectNewItem) {
  const fragment = document.createDocumentFragment();
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("create-card_title");
  const title = document.createElement("p");
  title.classList.add("create-card__sub-title");
  title.textContent = "Добавить запись";
  cardTitle.appendChild(title);
  const backButton = document.createElement("button");
  backButton.classList.add("button-arrow-back");
  backButton.addEventListener("click", function () {
    createCard.innerHTML = "";

    createCard.appendChild(selectNewItem(createCard));
  });

  cardTitle.appendChild(backButton);
  fragment.appendChild(cardTitle);
  if (entry === "url") {
    const blockName = newBlockElement(
      "class-div",
      "class-label",
      "name",
      "class-input",
      "text",
      "block-name" + Date.now(),
      "введите name"
    );
    fragment.appendChild(blockName);
    const blockUrl = newBlockElement(
      "class-div",
      "class-label",
      "url",
      "class-input",
      "text",
      "block-url" + Date.now(),
      "введите url"
    );
    fragment.appendChild(blockUrl);
    const blockLogin = newBlockElement(
      "class-div",
      "class-label",
      "login",
      "class-input",
      "text",
      "block-login" + Date.now(),
      "введите login"
    );
    fragment.appendChild(blockLogin);
    const blockPassword = newBlockElement(
      "class-div",
      "class-label",
      "password",
      "class-input",
      "password",
      "block-password" + Date.now(),
      "введите password"
    );
    fragment.appendChild(blockPassword);
  } else if (entry === "card") {
    const blockName = newBlockElement(
      "class-div",
      "class-label",
      "name",
      "class-input",
      "text",
      "block-name" + Date.now(),
      "введите имя банка"
    );
    fragment.appendChild(blockName);
    const blockNumber = newBlockElement(
      "class-div",
      "class-label",
      "number",
      "class-input",
      "text",
      "block-number" + Date.now(),
      "введите номер карты"
    );
    fragment.appendChild(blockNumber);
    const blockPin = newBlockElement(
      "class-div",
      "class-label",
      "pin",
      "class-input",
      "text",
      "block-pin" + Date.now(),
      "введите pin"
    );
    fragment.appendChild(blockPin);
    const blockСvv = newBlockElement(
      "class-div",
      "class-label",
      "cvv",
      "class-input",
      "text",
      "block-cvv" + Date.now(),
      "введите cvv"
    );
    fragment.appendChild(blockСvv);
  } else if (entry === "score") {
    const blockName = newBlockElement(
      "class-div",
      "class-label",
      "name",
      "class-input",
      "text",
      "block-name" + Date.now(),
      "введите имя банка"
    );
    fragment.appendChild(blockName);
    const blockNumber = newBlockElement(
      "class-div",
      "class-label",
      "number",
      "class-input",
      "text",
      "block-number" + Date.now(),
      "введите номер счета"
    );
    fragment.appendChild(blockNumber);
    const blockPass = newBlockElement(
      "class-div",
      "class-label",
      "password",
      "class-input",
      "text",
      "block-pass" + Date.now(),
      "введите пароль"
    );
    fragment.appendChild(blockPass);
  } else if (entry === "contact") {
    const blockName = newBlockElement(
      "class-div",
      "class-label",
      "name",
      "class-input",
      "text",
      "block-name" + Date.now(),
      "введите имя контакта"
    );
    fragment.appendChild(blockName);
    const blockNumber = newBlockElement(
      "class-div",
      "class-label",
      "number",
      "class-input",
      "text",
      "block-number" + Date.now(),
      "введите номер"
    );
    fragment.appendChild(blockNumber);
    const blockComment = newBlockElement(
      "class-div",
      "class-label",
      "comment",
      "class-input",
      "text",
      "block-comment" + Date.now(),
      "введите комментарий"
    );
    fragment.appendChild(blockComment);
  }

  const button = document.createElement("button");
  button.classList.add("create-card__item");
  button.textContent = "Сохранить";

  button.addEventListener("click", (event) => {
    const target = event.target;
    let result = {};
    const createCard = target.closest(".create-card");
    const itemsInput = createCard.querySelectorAll(".class-div");

    itemsInput.forEach((elem) => {
      const key = elem.querySelector(".class-label").textContent;
      const value = elem.querySelector(".class-input").value;
      result[key] = value;
    });

    items.push({ id: Date.now(), type: entry, data: result });
    const password = JSON.parse(sessionStorage.getItem("passwordhub"));
    var crypted = aes.encryptText(JSON.stringify({ data: items }), password, {
      nBits: 256,
    });
    localStorage.setItem("passwordhub", crypted);
    loadItems(items);
    createCard.innerHTML = "";
  });

  fragment.appendChild(button);
  return fragment;
}
export default createNewElement;
