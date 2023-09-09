import icon_black from "../../img/icon/icon-arrow-back.png";
import icon_light from "../../img/icon/icon-arrow-back.png";

function selectNewItem(createCard) {
  const elements = document.querySelectorAll(".element");
  elements.forEach((element) => {
    element.style.height = "";
  });
  const theme = localStorage.getItem("theme") || "light";
  const themeClass = {
    dark: {
      cardTitle: ["dark-colors", "create-card_title"],
      title: ["dark-colors", "create-card__sub-title"],
      backButton: ["dark-colors", "button-arrow-back"],
      icon: icon_black,
    },
    light: {
      cardTitle: ["create-card_title"],
      title: ["create-card__sub-title"],
      backButton: ["button-arrow-back"],
      icon: icon_light,
    },
  };
  const blockSelect = document.createDocumentFragment();
  const cardTitle = document.createElement("div");
  cardTitle.classList.add(...themeClass[theme].cardTitle);
  const title = document.createElement("p");
  title.classList.add(...themeClass[theme].title);
  title.textContent = "Тип записи";
  cardTitle.appendChild(title);
  const backButton = document.createElement("button");
  backButton.classList.add(...themeClass[theme].backButton);
  // const img = document.createElement("img");
  // img.src = themeClass[theme].icon;
  // backButton.appendChild(img);
  backButton.addEventListener("click", function (event) {
    createCard.classList.add("hidden-card");
    createCard.innerHTML = "";
  });
  cardTitle.appendChild(backButton);
  blockSelect.appendChild(cardTitle);
  const urlButton = document.createElement("button");
  urlButton.classList.add("create-card__item");
  urlButton.textContent = "Сайт";
  urlButton.dataset.name = "url";
  blockSelect.appendChild(urlButton);
  const cardButton = document.createElement("button");
  cardButton.classList.add("create-card__item");
  cardButton.textContent = "Платежная карта";
  cardButton.dataset.name = "card";
  blockSelect.appendChild(cardButton);
  const payButton = document.createElement("button");
  payButton.classList.add("create-card__item");
  payButton.textContent = "Банковский счет";
  payButton.dataset.name = "score";
  blockSelect.appendChild(payButton);
  const contactButton = document.createElement("button");
  contactButton.classList.add("create-card__item");
  contactButton.textContent = "Контакт";
  contactButton.dataset.name = "contact";
  blockSelect.appendChild(contactButton);
  return blockSelect;
}

export default selectNewItem;
