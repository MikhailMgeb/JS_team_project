import { aes } from "../app";

function checkPassword(password) {
    var decrypted = aes.decryptText(
        pidCryptUtil.stripLineFeeds(localStorage.getItem("passwordhub")),
        password,
        { nBits: 256 }
      );
//    return JSON.parse(localStorage.getItem("passwordhub")).password ===password
      let result;
      try {
        result = JSON.parse(decrypted);
      } catch (error) {
        console.log(error);
        return;
      }
      return result;
}
export default checkPassword;
