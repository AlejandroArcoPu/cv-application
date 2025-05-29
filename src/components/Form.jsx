import Divider from "./Divider";
import "../styles/Form.css";
import HeaderForm from "./HeaderForm";
import { Calendar } from "lucide-react";

export default function Form({ formElements, buttonName, onChange }) {
  return (
    <form action="" className="ecv-form" onSubmit={onChange}>
      {formElements.map((element) => (
        <div key={element.label} className="ecv-form-row">
          <label className="ecv-form-label" htmlFor={element.for}>
            {element.label}
          </label>
          {element.type === "month" ? (
            <div className="ecv-form-div-input">
              <input
                className="ecv-form-input-month"
                type="month"
                name={element.for}
                required={element.required}
              />
              <span className="ecv-form-input-month-open">
                <button type="button">
                  <Calendar
                    fill="var(--bg-color)"
                    stroke="var(--text-color)"
                    width="18px"
                  />
                </button>
              </span>
            </div>
          ) : (
            <input
              className="ecv-form-input"
              type={element.type}
              name={element.for}
              required={element.required}
            />
          )}
          <p className="ecv-form-subInput">{element.description}</p>
        </div>
      ))}
      <div className="">
        <button className="ecv-update" type="submit">
          {buttonName}
        </button>
      </div>
    </form>
  );
}
