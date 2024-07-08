import item_data from "./items.json";
import nameMapping from "./nameMapping.json";
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

  static GetHgeName(niceName: string): string {
    const mapping = nameMapping.find(
      (mapping) => mapping.niceName === niceName
    );
    if (mapping != undefined) {
      return mapping.hgeName;
    }
    return "";
  }
}

export default ItemData;
