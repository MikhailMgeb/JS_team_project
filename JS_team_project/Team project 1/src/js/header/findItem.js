import loadItems from "../loadItems";
import { items } from "../app";


function findItem(target) {
    const res = items.filter(
        (item) => item.data.name.indexOf(target.value) === 0
      );
      loadItems(res);
}
export default findItem;