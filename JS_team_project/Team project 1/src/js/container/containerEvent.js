import updateItem from "./updateItem";
import removeItem from "./removeItem";
import loadItems from "../loadItems";

function containerEvent(target, items) {
  if (target.classList.contains("edit__item")) {
    updateItem(target);
  }

  if (target.classList.contains("remove__item")) {
    loadItems(removeItem(target));
  }
  if (!target.closest(".item-block")) return;
  const element = target.closest(".item").querySelector(".element");

  if (element.style.height) {
    document
      .querySelectorAll(".element")
      .forEach((element) => (element.style.height = ""));
  } else {
    document
      .querySelectorAll(".element")
      .forEach((element) => (element.style.height = ""));
    element.style.height = `${5.5 * 40}px`;
  }
}
export default containerEvent;
