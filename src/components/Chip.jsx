import "../styles/Chip.css";
import { X } from "lucide-react";

export default function Chip({
  name,
  required,
  max,
  label,
  description,
  handleExtraData,
  removeExtraData,
  extraData,
}) {
  const index = extraData.length > 0 && extraData.findIndex((obj) => obj[name]);
  const extraIndex = extraData[index];

  return (
    <div className="ecv-form-row">
      <label className="ecv-form-label" htmlFor={name}>
        {label}
      </label>
      {extraIndex && (
        <div className="ecv-chip">
          {extraData[index][name].map((chip) => (
            <p className="ecv-chip-keys" key={chip}>
              {chip}
              <button
                className="ecv-chips-keys-remove"
                onClick={() => removeExtraData(index, chip, name)}
              >
                <X width="15" />
              </button>
            </p>
          ))}
        </div>
      )}
      <input
        minLength="2"
        maxLength="15"
        className="ecv-form-input"
        type="text"
        required={required}
        name={name}
        onKeyDown={(e) => handleExtraData(e, name, max)}
      />
      <p className="ecv-form-subInput">{description}</p>
    </div>
  );
}
