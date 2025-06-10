import HeaderForm from "./HeaderForm";
import Chip from "./Chip";
import Form from "./Form";
import { extras } from "../data/formsElements";

export default function Extra({
  active,
  title,
  subtitle,
  handleExtraData,
  extraData,
  removeExtraData,
}) {
  return (
    <div className={title === active ? "ecv-extra" : "ecv-extra not-display"}>
      <HeaderForm title={title} subtitle={subtitle} />
      {extras.map((extra) => (
        <Chip
          key={extra.for}
          name={extra.for}
          required={extra.required}
          max={extra.max}
          label={extra.label}
          description={extra.description}
          extraData={extraData}
          removeExtraData={removeExtraData}
          handleExtraData={handleExtraData}
        />
      ))}
    </div>
  );
}
