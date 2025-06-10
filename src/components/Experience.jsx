import HeaderForm from "./HeaderForm";
import Form from "./Form";
import AddedItem from "./AddedItem";
import { experience } from "../data/formsElements";

export default function Experience({
  title,
  subtitle,
  active,
  handleExperienceData,
  experienceData,
  removeExperienceData,
}) {
  return (
    <div
      className={
        title === active ? "ecv-professional" : "ecv-professional not-display"
      }
    >
      <HeaderForm title={title} subtitle={subtitle} />
      {experienceData.map((experience) => (
        <AddedItem
          key={experience.id}
          id={experience.id}
          title={experience.role}
          subtitle={experience.company}
          start={experience.start}
          end={experience.end}
          location={experience.location}
          remove={removeExperienceData}
        />
      ))}
      <Form
        formElements={experience}
        onSubmit={handleExperienceData}
        buttonName="Add"
      />
    </div>
  );
}
