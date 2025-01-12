import { Figure } from "../models/figures/Figute";

interface Props {
  title: string;
  figures: Figure[];
}

export const LostFigures = ({ title, figures }: Props) => {
  return (
    <div className="lost">
      <h3>{title}</h3>
      <span>
        {figures.map((figure) => (
          <div key={figure.id}>
            {figure.name}{" "}
            {figure.logo && <img width={20} height={20} src={figure.logo} />}
          </div>
        ))}
      </span>
    </div>
  );
};
