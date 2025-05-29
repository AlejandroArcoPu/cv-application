import HeaderForm from "./HeaderForm";
import Form from "./Form";
import { education } from "../data/formsElements";

export default function Education({
  title,
  subtitle,
  active,
  handleEducationData,
  educationData,
}) {
  return (
    <div
      className={
        title === active ? "ecv-education" : "ecv-education not-display"
      }
    >
      <HeaderForm title={title} subtitle={subtitle} />
      <Form
        formElements={education}
        buttonName="Add"
        onChange={handleEducationData}
      />
    </div>
  );
}
