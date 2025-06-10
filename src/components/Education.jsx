import HeaderForm from "./HeaderForm";
import AddedItem from "./AddedItem";
import Form from "./Form";
import { education } from "../data/formsElements";

export default function Education({
  active,
  handleEducationData,
  educationData,
  removeEducationData,
  title,
  subtitle,
}) {
  return (
    <div
      className={
        title === active ? "ecv-education" : "ecv-education not-display"
      }
    >
      <HeaderForm title={title} subtitle={subtitle} />
      {educationData.map((education) => (
        <AddedItem
          key={education.id}
          id={education.id}
          title={education.educational}
          subtitle={education.title}
          start={education.start}
          end={education.end}
          remove={removeEducationData}
        />
      ))}
      <Form
        formElements={education}
        buttonName="Add"
        onSubmit={handleEducationData}
      />
    </div>
  );
}
