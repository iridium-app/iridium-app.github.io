import ItemData from "../../../data/ItemData";

interface ItemImageProps {
  itemName: string;
}

/**
 * Reusable component for displaying item sprites with Bulbapedia links
 */
function ItemImage({ itemName }: ItemImageProps) {
  const itemData = ItemData.Dict[itemName];
  const isHidden = itemName === "ITEM_NONE" || itemName === undefined;

  return (
    <a
      href={"https://bulbapedia.bulbagarden.net/wiki/" + (itemData?.name || "")}
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
        className={isHidden ? "hidden" : ""}
        alt={itemName}
        src={`/sprites/items/${itemName}.png`}
        title={
          itemData ? `${itemData.name}: ${itemData.description}` : itemName
        }
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}

export default ItemImage;
