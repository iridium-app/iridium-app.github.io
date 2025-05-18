import { Area } from "../data/MastersheetData";

function TableOfContents({
  filteredMastersheet,
}: {
  filteredMastersheet: Area[];
}) {
  return (
    <div className="table-of-contents">
      <div className="table-of-contents__header">Table of Contents</div>
      {/* {filteredMastersheet.map((mastersheetEntry) => (
        <button
          key={"entry_" + mastersheetEntry.id}
          onClick={() =>
            document
              .querySelector("#entry_" + mastersheetEntry.id)
              ?.scrollIntoView()
          }
        >
          {mastersheetEntry.name}
        </button>
      ))} */}
    </div>
  );
}

export default TableOfContents;
