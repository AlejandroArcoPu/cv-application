import Form from "./Form";
import HeaderForm from "./HeaderForm";
import { personal } from "../data/formsElements";

export default function PersonalInfo({
  title,
  subtitle,
  active,
  handlePersonalData,
}) {
  return (
    <div
      className={
        title === active ? "ecv-personalInfo" : "ecv-personalInfo not-display"
      }
    >
      <HeaderForm title={title} subtitle={subtitle} />
      <Form
        formElements={personal}
        buttonName="Update"
        onSubmit={handlePersonalData}
      />
    </div>
  );
}
