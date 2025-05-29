import HeaderForm from "./HeaderForm";
import Form from "./Form";

export default function ProfessionalExperience({ title, subtitle, active }) {
  const formElements = [
    {
      label: "Role",
      for: "role",
      type: "text",
      description: "State the job title or position you held in the company.",
    },
    {
      label: "Company",
      for: "company",
      type: "text",
      description: "Enter the name of the organization where you worked.",
    },
    {
      label: "Start Date",
      for: "start",
      type: "month",
      description: "Select the date you started this role.",
    },
    {
      label: "End Date",
      for: "end",
      type: "month",
      description: "Select the date you left this role.",
    },
  ];

  return (
    <div
      className={
        title === active ? "ecv-professional" : "ecv-professional not-display"
      }
    >
      <HeaderForm title={title} subtitle={subtitle} />
      {/* <Form formElements={formElements} buttonName="Add" /> */}
    </div>
  );
}
