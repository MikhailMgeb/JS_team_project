import { aes } from "../app";
import loadFromLocal from "../local/loadFromLocal";

function removeItem(target) {
  const items = loadFromLocal();
  const element = target.closest(".item");
  const result = items.filter((item) => {
    return item.id !== +element.id;
  });
  const password = JSON.parse(sessionStorage.getItem("passwordhub"));
  var crypted = aes.encryptText(JSON.stringify({ data: result }), password, {
    nBits: 256,
  });
  localStorage.setItem("passwordhub", crypted);
  return result;
}

export default removeItem;
