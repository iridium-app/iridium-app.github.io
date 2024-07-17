import { useContext } from "react";
import { UserContext } from "../App";
import MastersheetData from "../data/MastersheetData";

function TableOfContents() {
  const { difficulty } = useContext(UserContext);
  const mastersheetData = MastersheetData.GetPanels(difficulty);

  return (
    <div className="table-of-contents">
      <div className="table-of-contents__header">Table of Contents</div>
      {mastersheetData.map((panel) => (
        <button
          onClick={() =>
            document.querySelector("#" + panel.type + "_" + panel.id)?.scrollIntoView()
          }
        >
          {MastersheetData.GetName(panel)}
        </button>
      ))}
    </div>
  );
}

export default TableOfContents;
