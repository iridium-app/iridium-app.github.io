import Utility from "../Utility";

function MonImage({ formName }: { formName: string }) {
  return (
    <img
      title={Utility.GetNiceName(formName)}
      src={
        "/sprites/pokemon/" +
        formName.replace("SPECIES_", "").toLowerCase() +
        ".png"
      }
    />
  );
}

export default MonImage;
