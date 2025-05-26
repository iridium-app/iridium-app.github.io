import ItemData from "../data/ItemData";

function ItemImage({ itemName }: { itemName: string }) {
  return (
    <a
      href={
        "https://bulbapedia.bulbagarden.net/wiki/" +
        ItemData.Dict[itemName]?.name
      }
      target="_blank"
      rel="noreferrer"
      className="item-link"
      style={{
        display: "inline-block",
        transition: "transform 0.2s ease",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.4)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
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
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}

export default ItemImage;
