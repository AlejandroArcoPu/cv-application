import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Extra from "./Extra";

export default function Forms({
  active,
  handleEducationData,
  educationData,
  removeEducationData,
  handleExperienceData,
  experienceData,
  removeExperienceData,
  handlePersonalData,
  handleExtraData,
  extraData,
  removeExtraData,
}) {
  return (
    <>
      <PersonalInfo
        active={active}
        handlePersonalData={handlePersonalData}
        title="Personal Information"
        subtitle="Complete your personal details to ensure employers know how to reach and identify you."
      />
      <Education
        active={active}
        handleEducationData={handleEducationData}
        educationData={educationData}
        removeEducationData={removeEducationData}
        title="Education"
        subtitle="Add your educational background to show employers your qualifications and academic achievements."
      />
      <Experience
        active={active}
        handleExperienceData={handleExperienceData}
        experienceData={experienceData}
        removeExperienceData={removeExperienceData}
        title="Experience"
        subtitle="Highlight your professional journey by detailing roles, responsibilities, and achievements."
      />
      <Extra
        active={active}
        title="Extra"
        subtitle="Add relevant skills and languages to complete your profile. Use comma to add a new item."
        handleExtraData={handleExtraData}
        extraData={extraData}
        removeExtraData={removeExtraData}
      />
    </>
  );
}
