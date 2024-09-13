import ItemData from "../data/ItemData";

function ItemImage({ itemName }: { itemName: string }) {
  return (
    <a
      href={"https://bulbapedia.bulbagarden.net/wiki/" + ItemData.Dict[itemName]?.name}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className={
          itemName === "ITEM_NONE" || itemName === undefined ? "hidden" : ""
        }
        alt={itemName}
        src={"/sprites/items/" + itemName + ".png"}
        title={
          ItemData.Dict[itemName]?.name +
          ": " +
          ItemData.Dict[itemName]?.description
        }
      />
    </a>
  );
}

export default ItemImage;
