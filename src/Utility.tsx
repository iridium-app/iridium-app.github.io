class Utility {
  static GetNiceTypeName(hgeTypeName: string): string {
    var split = hgeTypeName.toLowerCase().split("_");
    var retVal = "";
    for (let i = 1; i < split.length; i++) {
      retVal += split[i].charAt(0).toUpperCase() + split[i].slice(1) + " ";
    }
    retVal.trimEnd();
    return retVal;
  }
}

export default Utility;