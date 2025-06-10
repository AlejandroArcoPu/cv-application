import "../styles/AddedItem.css";
import { Trash2 } from "lucide-react";

export default function AddedItem({
  id,
  title,
  subtitle,
  start,
  end,
  location,
  remove,
}) {
  return (
    <article className="ecv-addedItem">
      <h3 className="ecv-addedItem-title">{title}</h3>
      <p className="ecv-addedItem-subtitle">{subtitle}</p>
      <p className="ecv-addedItem-dates">
        {start} - {end}
      </p>
      <p className="ecv-addedItem-dates">{location}</p>
      <Trash2
        width="18"
        className="ecv-addedItem-trash"
        onClick={() => remove(id)}
      />
    </article>
  );
}
