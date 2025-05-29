import "../styles/Divider.css";
export default function Divider({ height = "1px", opacity = "0.2" }) {
  return (
    <div style={{ borderWidth: height, opacity }} className="ecv-divider"></div>
  );
}
