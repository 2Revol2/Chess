import { Cell } from "../models/Cell";

interface Props {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

export const CellComponents = ({ cell, selected, click }: Props) => {
  return (
    // 'cell black/white'
    <div
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      onClick={() => click(cell)}
      style={{ backgroundColor: cell.available && cell.figure ? "green" : "" }}
    >
      {cell.available && !cell.figure && <div className="available" />}

      {cell.figure?.logo && <img src={cell.figure?.logo}></img>}
    </div>
  );
};
