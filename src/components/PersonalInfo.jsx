import Form from "./Form";
import HeaderForm from "./HeaderForm";

export default function PersonalInfo({ title, subtitle, active }) {
  const formElements = [
    {
      label: "Name",
      for: "name",
      type: "text",
      description:
        "Enter your first and last name as you'd like it to appear on your CV.",
    },
    {
      label: "Email",
      for: "email",
      type: "email",
      description:
        "Use a professional email you regularly check — recruiters may contact you here.",
    },
    {
      label: "Telephone",
      for: "telephone",
      type: "tel",
      description:
        "Include a number where you can be easily reached for job opportunities.",
    },
    {
      label: "LinkedIn",
      for: "linkedin",
      type: "text",
      description:
        "Paste the full URL to your LinkedIn profile (e.g., https://linkedin.com/in/yourname).",
    },
  ];
  return (
    <div
      className={
        title === active ? "ecv-personalInfo" : "ecv-personalInfo not-display"
      }
    >
      <HeaderForm title={title} subtitle={subtitle} />
      {/* <Form formElements={formElements} buttonName="Update" /> */}
    </div>
  );
}
