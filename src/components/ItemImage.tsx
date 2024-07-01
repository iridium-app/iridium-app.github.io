import ItemData from "../data/ItemData";

function ItemImage({ itemName }: { itemName: string }) {
  return (
    <img
      className={itemName === "ITEM_NONE" || itemName === undefined ? "hidden" : ""}
      src={"/sprites/items/" + itemName + ".png"}
      title={ItemData.Dict[itemName]?.name}
    />
  );
}

export default ItemImage;
