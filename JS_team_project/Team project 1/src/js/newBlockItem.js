import newBlockElement from "./newBlockElement";
import iconCard from "../img/icon/card.png";
import iconUrl from "../img/icon/url.png";
import iconContact from "../img/icon/contact.png";
import iconScore from "../img/icon/score.png";

function newBlockItem(element) {
  const item = document.createElement("li");
  item.id = element.id;
  item.classList.add("item");
  const itemBlock = document.createElement("div");
  itemBlock.classList.add("item-block");
  const iconType = document.createElement("div");
  iconType.classList.add("icon-container");

  if (element.type === "card") {
    iconType.classList.add("icon-card");
  } else if (element.type === "url") {
    iconType.classList.add("icon-url");
  } else if (element.type === "contact") {
    iconType.classList.add("icon-contact");
  } else {
    iconType.classList.add("icon-score");
  }
  
  itemBlock.appendChild(iconType);
  const urlText = document.createElement("p");
  urlText.textContent = element.data.name;
  itemBlock.appendChild(urlText);
  const elementDate = document.createElement("p");
  var date = new Date(element.id);
  elementDate.textContent =
    date.toLocaleTimeString() + " " + date.toLocaleDateString();
  itemBlock.appendChild(elementDate);
  item.appendChild(itemBlock);
  const hiddenElement = document.createElement("div");
  hiddenElement.classList.add("element");
  const separatingLine = document.createElement("hr");
  separatingLine.classList.add('separating-line');
  hiddenElement.appendChild(separatingLine);
  const inputBlock = document.createElement("div");
  inputBlock.classList.add("input-block");

  for (const key in element.data) {
    if (key !== "name") {
      inputBlock.appendChild(
        newBlockElement(
          "block-input",
          "class-label",
          key,
          "class-input",
          "text",
          element.id,
          null,
          element.data[key],
          true
        )
      );
    }
  }
  hiddenElement.appendChild(inputBlock);
  const menuButtonsEdit = document.createElement("div");
  menuButtonsEdit.classList.add("menu-buttons__edit");
  const buttonEdit = document.createElement("button");
  buttonEdit.classList.add("two-buttons__button", "edit__item");
  buttonEdit.textContent = "Редактировать";
  menuButtonsEdit.appendChild(buttonEdit);
  const buttonDel = document.createElement("button");
  buttonDel.classList.add("two-buttons__button", "remove__item");
  buttonDel.textContent = "Удалить";
  menuButtonsEdit.appendChild(buttonDel);
  hiddenElement.appendChild(menuButtonsEdit);
  item.appendChild(hiddenElement);

  return item;
}

export default newBlockItem;
