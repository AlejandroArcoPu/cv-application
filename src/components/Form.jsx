import Divider from "./Divider";
import "../styles/Form.css";
import HeaderForm from "./HeaderForm";
import { Calendar } from "lucide-react";
import Checkbox from "./Checkbox";
import { useState } from "react";
import Chip from "./Chip";
import { useForm } from "react-hook-form";

export default function Form({ formElements, buttonName, onSubmit }) {
  const [checked, setChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <form action="" className="ecv-form" onSubmit={handleSubmit(onSubmit)}>
      {formElements.map((element) => (
        <div
          key={element.label}
          className={
            element.for === "end" && checked
              ? "ecv-form-row ecv-input-checked"
              : "ecv-form-row"
          }
        >
          {element.type === "checkbox" ? (
            <Checkbox
              label={element.label}
              description={element.description}
              required={element.required}
              checked={checked}
              handleChecked={handleChecked}
            />
          ) : (
            <>
              <label className="ecv-form-label" htmlFor={element.for}>
                {element.label}
              </label>
              {element.type === "month" ? (
                <div className="ecv-form-div-input">
                  <input
                    className={
                      errors[element.for]
                        ? "ecv-form-input-month invalid"
                        : "ecv-form-input-month"
                    }
                    type="month"
                    name={element.for}
                    {...register(element.for, { required: element.required })}
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
              ) : element.type === "textarea" ? (
                <textarea
                  name={element.for}
                  minLength={element.min}
                  maxLength={element.max}
                  className={
                    errors[element.for]
                      ? "ecv-form-input ecv-form-textarea invalid"
                      : "ecv-form-input ecv-form-textarea"
                  }
                  {...register(element.for, { required: element.required })}
                ></textarea>
              ) : (
                <input
                  minLength="2"
                  maxLength="40"
                  id={element.for}
                  className={
                    element.type === "file"
                      ? errors[element.for]
                        ? "ecv-form-input ecv-form-input-file invalid"
                        : "ecv-form-input ecv-form-input-file"
                      : errors[element.for]
                      ? "ecv-form-input invalid"
                      : "ecv-form-input"
                  }
                  type={element.type}
                  name={element.for}
                  accept={
                    element.type === "file" ? "image/png, image/jpeg" : ""
                  }
                  {...register(element.for, {
                    required: element.required,
                  })}
                />
              )}
              <p className="ecv-form-subInput">{element.description}</p>
              {errors[element.for] && (
                <span className="ecv-form-error">
                  {element.label} is required.
                </span>
              )}
            </>
          )}
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
