import { TrainerInfo } from "../../data/TrainerData";

/**
 * Utility functions for the application
 */
export class Utility {
  /**
   * Converts HGE type names to nice display names
   * @param hgeTypeName - The HGE type name (e.g., "TYPE_FIRE")
   * @returns The formatted display name (e.g., "Fire")
   */
  static getNiceName(hgeTypeName: string): string {
    const split = hgeTypeName.toLowerCase().split("_");
    let retVal = "";
    
    for (let i = 1; i < split.length; i++) {
      retVal += split[i].charAt(0).toUpperCase() + split[i].slice(1) + " ";
    }
    
    return retVal.trimEnd();
  }

  /**
   * Gets the path for damage category images
   * @param hgeDamageCategory - The HGE damage category (e.g., "SPLIT_PHYSICAL")
   * @returns The image path
   */
  static getDamageCategoryPath(hgeDamageCategory: string): string {
    const lower = hgeDamageCategory.replace("SPLIT_", "").toLowerCase();
    return `/sprites/misc/move-${lower}.png`;
  }

  /**
   * Formats trainer names with proper prefixes
   * @param trainer - The trainer information
   * @returns The formatted trainer name
   */
  static getNiceTrainerName(trainer: TrainerInfo): string {
    if (!trainer.class) {
      return trainer.name;
    }

    let className = trainer.class.replace("_M", "").replace("_F", "");
    
    switch (className) {
      case "IRIS":
      case "STEVEN":
        return `Rival ${trainer.name}`;
      default:
        const names = className.split("_");
        if (!names || names.length === 0) {
          return trainer.name;
        }
        
        const niceNames = names.map(
          (s) => s.charAt(0).toUpperCase() + s.toLowerCase().slice(1)
        );
        return `${niceNames.join(" ")} ${trainer.name}`;
    }
  }

  /**
   * Gets the trainer image path with fallback logic
   * @param trainer - The trainer information
   * @returns The image path
   */
  static getTrainerImage(trainer: TrainerInfo): string {
    const prefix = "/sprites/trainers/";
    let className = trainer.class.replaceAll("_", "").toLowerCase();
    className = className.replace(/[0-9]/g, "");

    // Try exact name match first
    const nameTry = `${prefix}${trainer.name}.png`;
    if (this.imageExists(nameTry)) return nameTry;

    // Try grunt pattern
    const gruntTry = `${prefix}${className.slice(0, className.length - 1)}grunt${className.charAt(className.length - 1)}.png`;
    if (this.imageExists(gruntTry)) return gruntTry;

    // Try no gender suffix
    const noGender = `${prefix}${className.slice(0, className.length - 1)}-gen4.png`;
    if (this.imageExists(noGender)) return noGender;

    // Try gen4 suffix
    const gen4Try = `${prefix}${className}-gen4.png`;
    if (this.imageExists(gen4Try)) return gen4Try;

    // Default fallback
    return `${prefix}${className}.png`;
  }

  /**
   * Checks if an image exists at the given URL
   * @param imageUrl - The image URL to check
   * @returns True if the image exists
   */
  static imageExists(imageUrl: string): boolean {
    const image = new Image();
    image.src = imageUrl;
    return image.width !== 0;
  }
}

// Export default for backward compatibility
export default Utility; 