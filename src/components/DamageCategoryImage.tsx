import Utility from "../shared/utils/utility";

function DamageCategoryImage({ damageCategory }: { damageCategory: string }) {
  return (
    <img
      alt={damageCategory}
      src={Utility.getDamageCategoryPath(damageCategory)}
    ></img>
  );
}

export default DamageCategoryImage;
