import { Utility } from "../../utils";

interface DamageCategoryImageProps {
  damageCategory: string;
}

/**
 * Reusable component for displaying move damage category icons
 */
function DamageCategoryImage({ damageCategory }: DamageCategoryImageProps) {
  return (
    <img
      alt={damageCategory}
      src={Utility.getDamageCategoryPath(damageCategory)}
    />
  );
}

export default DamageCategoryImage;
