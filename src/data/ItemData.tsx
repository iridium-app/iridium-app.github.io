import item_data from "./items.json";
let x: unknown = item_data;
interface IDictionary {
  [index: string]: ItemInfo;
}
export type ItemInfo = {
  id: number;
  name: string;
};

class ItemData {
  static Dict: IDictionary = x as { string: ItemInfo };
}

export default ItemData;
