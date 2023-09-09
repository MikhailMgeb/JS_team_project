import { items, aes } from "../app";

function updateItem(target) {
    const inputItems = target.closest(".element").querySelectorAll("input");
    inputItems.forEach((elem) => {
      elem.disabled = elem.disabled ? "" : true;
    });

    if (target.textContent === "Сохранить") {
      const item = target.closest(".item");
      const id = item.id;
      const res = {};
      inputItems.forEach((elem) => {
        const key = elem
          .closest(".block-input")
          .querySelector(".class-label").textContent;
        res[key] = elem.value;
      });

      items.forEach((item) => {
        if (item.id == id) {
          for (const key in res) {
            item.data[key] = res[key];
          }
        }
      });

      const password = JSON.parse(sessionStorage.getItem("passwordhub"));
      var crypted = aes.encryptText(JSON.stringify({ data: items }), password, {
        nBits: 256,
      });
      localStorage.setItem("passwordhub", crypted);
    }

    target.textContent !== "Сохранить"
      ? (target.textContent = "Сохранить")
      : (target.textContent = "Редактировать");
}

export default updateItem;