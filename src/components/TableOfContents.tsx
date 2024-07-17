import { useContext } from "react";
import { UserContext } from "../App";
import MastersheetData, { Panel } from "../data/MastersheetData";

function TableOfContents( {filteredMastersheet}: {filteredMastersheet: Panel[]} ) {
  const { difficulty } = useContext(UserContext);

  return (
    <div className="table-of-contents">
      <div className="table-of-contents__header">Table of Contents</div>
      {filteredMastersheet.map((panel) => (
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
