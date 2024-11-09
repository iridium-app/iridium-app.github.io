import { TrainerInfo } from "./data/TrainerData";

class Utility {
  static GetNiceName(hgeTypeName: string): string {
    var split = hgeTypeName.toLowerCase().split("_");
    var retVal = "";
    for (let i = 1; i < split.length; i++) {
      retVal += split[i].charAt(0).toUpperCase() + split[i].slice(1) + " ";
    }
    retVal.trimEnd();
    return retVal;
  }

  static GetDamageCategoryPath(hgeDamageCategory: string): string {
    const lower = hgeDamageCategory.replace("SPLIT_", "").toLowerCase();
    return "/sprites/misc/move-" + lower + ".png";
  }

  static GetNiceTrainerName(trainer: TrainerInfo): string {
    var prefix = "";
    if (!trainer.class) {
      return trainer.name;
    }
    var className  = trainer.class.replace("_M", "");
    className = className.replace("_F", "");
    switch (className) {
      case "IRIS":
      case "STEVEN":
        prefix = "Rival ";
        break;
      default:
        var names = className.split("_");
        if (names === undefined) names = [trainer.name];
        var niceNames = names.map(
          (s) => s.charAt(0).toUpperCase() + s.toLowerCase().slice(1)
        );
        prefix = niceNames.join(" ");
        break;
    }

    return prefix + " " + trainer.name;
  }

  static GetTrainerImage(trainer: TrainerInfo): string {
    var prefix = "/sprites/trainers/";
    var className = trainer.class.replaceAll("_", "").toLowerCase();
    
    var nameTry = prefix + trainer.name + ".png";
    if (Utility.ImageExists(nameTry)) return nameTry;

    var gruntTry = prefix + className.slice(0, className.length - 1) + "grunt" + className.charAt(className.length - 1) + ".png";
    if (Utility.ImageExists(gruntTry)) return gruntTry;

    var noGender = prefix + className.slice(0, className.length - 1) + "-gen4.png";
    if (Utility.ImageExists(noGender)) return noGender;

    var gen4Try = prefix + className + "-gen4.png"
    if (Utility.ImageExists(gen4Try)) return gen4Try;
    return prefix + className + ".png";
  }

  static ImageExists(imageUrl: string): boolean {
    var image = new Image();
    image.src = imageUrl;
    return image.width != 0;
  }
}

export default Utility;
