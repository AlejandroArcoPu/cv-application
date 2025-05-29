import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Professional from "./ProfessionalExperience";

export default function Forms({ active, handleEducationData, educationData }) {
  return (
    <>
      <PersonalInfo
        active={active}
        title="Personal Information"
        subtitle="Complete your personal details to ensure employers know how to reach and identify you."
      />
      <Education
        active={active}
        handleEducationData={handleEducationData}
        educationDate={educationData}
        title="Education"
        subtitle="Add your educational background to show employers your qualifications and academic achievements."
      />
      <Professional
        active={active}
        title="Experience"
        subtitle="Highlight your professional journey by detailing roles, responsibilities, and achievements."
      />
    </>
  );
}
