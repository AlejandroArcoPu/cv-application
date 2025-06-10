import "../styles/Checkbox.css";

export default function Checkbox({
  description,
  label,
  checked,
  handleChecked,
}) {
  return (
    <div className="ecv-checkbox">
      <label className="ecv-checkbox-label">
        {label}
        <input
          className="ecv-checkbox-input"
          type="checkbox"
          value={checked}
          onChange={handleChecked}
        />
        <span className="ecv-checkbox-check"></span>
      </label>
      <p className="ecv-checkbox-description">{description}</p>
    </div>
  );
}
