import { MonWithForm } from "./Dex";
import form_table from "./json/formTable.json";
let x: unknown = form_table;
interface IDictionary {
  [index: string]: {
    [index: string]: string;
  };
}

class FormTable {
  private static Dict: IDictionary = x as { index: { index: string } };

  static GetFormName(monWithForm: MonWithForm): string {
    if (monWithForm.form > 0)
      return this.Dict[monWithForm.name][monWithForm.form];
    else return monWithForm.name;
  }
}

export default FormTable;
