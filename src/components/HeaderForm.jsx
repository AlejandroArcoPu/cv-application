import Divider from "./Divider";
import "../styles/HeaderForm.css";

export default function HeaderForm({ title, subtitle }) {
  return (
    <>
      <div>
        <h1 className="ecv-headerForm-title">{title}</h1>
        <p className="ecv-headerForm-subtitle">{subtitle}</p>
      </div>
      <Divider />
    </>
  );
}
