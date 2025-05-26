import Utility from "../Utility";

function DamageCategoryImage({ damageCategory }: { damageCategory: string }) {
  return (
    <img
      alt={damageCategory}
      src={Utility.GetDamageCategoryPath(damageCategory)}
    ></img>
  );
}

export default DamageCategoryImage;
