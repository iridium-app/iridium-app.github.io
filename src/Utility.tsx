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
}

export default Utility;
