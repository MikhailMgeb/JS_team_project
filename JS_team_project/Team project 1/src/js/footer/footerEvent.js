import selectNewItem from "./selectNewItem";
import loginCard from "./loginCard";

function footerEvent(target, createCard) {
  const logout = document.querySelector(".logout");
  if (target.closest(".create-button")) {
    createCard.appendChild(selectNewItem(createCard));
    createCard.classList.remove("hidden-card");
    return;
  }

  if (target.closest(".login-button")) {
    createCard.appendChild(loginCard(createCard));
    createCard.classList.remove("hidden-card");
    return;
  }
  if (target.closest(".logout")) {
    sessionStorage.removeItem("passwordhub");
    document.querySelector(".list-items").innerHTML = "";
    logout.textContent = "Создать пароль/Войти";
    logout.classList.toggle("logout");
    logout.classList.toggle("login-button");
    return;
  }
}
export default footerEvent;
