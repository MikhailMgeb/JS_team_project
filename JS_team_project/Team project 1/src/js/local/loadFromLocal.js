import checkPassword from "../auth/checkPassword";

function loadFromLocal() {
  const items = [];
  if (sessionStorage.getItem("passwordhub")) {
    const password = sessionStorage.getItem("passwordhub");
    if (checkPassword(password)) {
      const localItems = checkPassword(password).data;
      localItems.forEach((item) => {
        items.push(item);
      });
      return items;
    }
  }
}
export default loadFromLocal;
