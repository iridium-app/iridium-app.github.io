import ItemData from "../data/ItemData";

function ItemImage({ itemName }: { itemName: string }) {
  return (
    <img
      src={"/sprites/items/" + itemName + ".png"}
      title={ItemData.Dict[itemName]?.name}
    />
  );
}

export default ItemImage;
