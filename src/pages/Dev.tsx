import Dex from "../data/Dex";
import ItemData from "../data/ItemData";
import MoveData from "../data/MoveData";

function Dev() {
  interface FormElements extends HTMLFormControlsCollection {
    tsvInput: HTMLInputElement;
  }

  interface TsvFormElement extends HTMLFormElement {
    readonly elements: FormElements;
  }

  const onSubmit = (event: React.FormEvent<TsvFormElement>) => {
    event.preventDefault();
    const input: string = event.currentTarget.elements.tsvInput.value;
    const lines = input.split(/\r?\n/);
    const arr = lines.map((line) => line.split("\t"));

    var output = "\tparty {ID}";
    output += "\n\t\t";
    for (let i = 0; i < 6; i++) {
      if (!arr[0][i]) break;

      output += "// mon " + i;
      output += "\n\t\t";

      const ivs = arr[4][i];
      if (ivs) output += "ivs " + ivs;
      else output += "ivs 0";
      output += "\n\t\t";

      const level = arr[1][i];
      output += "level " + level;
      output += "\n\t\t";

      const monName = Dex.GetHgeName(arr[0][i]);
      output += "pokemon " + monName;
      output += "\n\t\t";

      const itemName = ItemData.GetHgeName(arr[5][i]);
      output += "item " + itemName;
      output += "\n\t\t";

      for (let j = 6; j < 10; j++) {
        const moveName = arr[j][i];
        if (moveName) {
          output += "move " + MoveData.GetHgeName(moveName);
        } else output += "move MOVE_NONE";
        output += "\n\t\t";
      }

      const abilityName = Dex.GetAbilityHgeName(arr[2][i]);
      output += "ability " + abilityName;
      output += "\n\t\t";

      const nature = "NATURE_" + arr[3][i].toUpperCase();
      output += "nature " + nature;
      output += "\n\t\t";

      output += "shinylock 0";
      output += "\n\t\t";
      output += "ballseal 0";
      output += "\n\t";
    }
    output += "endparty";

    navigator.clipboard.writeText(output);

    console.log(output);
  };

  return (
    <div className="dev">
      <form onSubmit={onSubmit}>
        <textarea id="tsvInput" />
        <button>Copy To Clipboard</button>
      </form>
    </div>
  );
}

export default Dev;
