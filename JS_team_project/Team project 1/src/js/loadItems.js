import newBlockItem from "./newBlockItem";
const container = document.querySelector(".list-items");

function loadItems(data) {
  container.innerHTML = '';
  for (const element of data) {
    container.appendChild(newBlockItem(element));
  }
}
export default loadItems;
