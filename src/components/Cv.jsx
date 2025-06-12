import "../styles/Cv.css";
import { CircleUserRound } from "lucide-react";
import { useRef } from "react";
import html2pdf from "html2pdf.js";
import {
  GraduationCap,
  Building2,
  BrushCleaning,
  Download,
} from "lucide-react";

export default function Cv({
  educationData,
  experienceData,
  personalData,
  extraData,
  setExtraData,
  setPersonalData,
  setExperienceData,
  setEducationData,
}) {
  const handleClean = () => {
    setExtraData([]);
    setExperienceData([]);
    setEducationData([]);
    setPersonalData({});
    localStorage.setItem("extraData", JSON.stringify([]));
    localStorage.setItem("experienceData", JSON.stringify([]));
    localStorage.setItem("educationData", JSON.stringify([]));
    localStorage.setItem("personalData", JSON.stringify({}));
  };

  const skillFound = extraData.find((obj) => obj["skills"]);
  const skillsChip = skillFound && Object.values(skillFound)[0];
  const languageFound = extraData.find((obj) => obj["languages"]);
  const languagesChip = languageFound && Object.values(languageFound)[0];

  const cvToBeImportedRef = useRef(null);
  const cvButtonsRef = useRef(null);

  const handleGeneratePdf = async () => {
    const element = cvToBeImportedRef.current;
    const buttons = cvButtonsRef.current;
    buttons.style.display = "none";
    console.log(buttons.style);
    var opt = {
      margin: 0,
      filename: "easy-cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 3, // Increase for better resolution (default is 1)
        useCORS: true, // For loading external images/fonts
      },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    await html2pdf().set(opt).from(element).save();
    buttons.style.display = "flex";
  };

  return (
    <div
      ref={cvToBeImportedRef}
      className={
        educationData.length === 0 &&
        experienceData.length === 0 &&
        Object.keys(personalData).length === 0
          ? "ecv-cv no-data"
          : "ecv-cv"
      }
    >
      {educationData.length === 0 &&
      experienceData.length === 0 &&
      Object.keys(personalData).length === 0 ? (
        <div className="ecv-cv-nodata">
          <p className="ecv-cv-nodata-text">
            Add data to see your{" "}
            <span className="ecv-cv-nodata-highlight">new CV!</span>
          </p>
        </div>
      ) : (
        <>
          <div ref={cvButtonsRef} className="ecv-cv-buttons no-data">
            <button
              type="button"
              className="ecv-cv-button"
              onClick={handleClean}
            >
              <BrushCleaning />
            </button>
            <button
              type="button"
              className="ecv-cv-button"
              onClick={handleGeneratePdf}
            >
              <Download />
            </button>
          </div>
          {Object.keys(personalData).length !== 0 && (
            <>
              <div className="ecv-cv-container-photo">
                {personalData.photo ? (
                  <img
                    className="ecv-cv-photo"
                    src={personalData.photo}
                    alt=""
                  />
                ) : (
                  <CircleUserRound width="80" height="80" />
                )}
              </div>
              <section className="ecv-cv-personal">
                <h1 className="ecv-cv-personal-title">{personalData.name}</h1>
                <p className="ecv-cv-personal-role">{personalData.role}</p>
                <p className="ecv-cv-personal-contact">
                  {personalData.telephone}
                  {" | "}
                  {personalData.email}
                  {" | "}
                  {personalData.linkedin}
                </p>
              </section>
              <section className="ecv-cv-shortbio">
                <h3 className="ecv-cv-shortbio-title">Short bio</h3>
                <p className="ecv-cv-shortbio-text">{personalData.bio}</p>
                <h3 className="ecv-cv-shortbio-title">Skills</h3>
                <div className="ecv-cv-chips">
                  {skillsChip &&
                    skillsChip.map((val) => (
                      <p key={val} className="ecv-cv-chip">
                        {val}
                      </p>
                    ))}
                </div>
                <h3 className="ecv-cv-shortbio-title">Languages</h3>
                <div className="ecv-cv-chips">
                  {languagesChip &&
                    languagesChip.map((val) => (
                      <p key={val} className="ecv-cv-chip">
                        {val}
                      </p>
                    ))}
                </div>
              </section>
            </>
          )}
          <section className="ecv-cv-section">
            <h1 className="ecv-cv-subsection-title">Education</h1>
            {educationData.map((education) => (
              <article
                key={education.title}
                className="ecv-cv-subsection-article"
              >
                {education.logo ? (
                  <img
                    className="ecv-cv-photo-logo"
                    src={education.logo}
                    alt={education.educational + " logo"}
                  />
                ) : (
                  <div className="ecv-cv-nophoto">
                    <GraduationCap width="40" height="40" />
                  </div>
                )}
                <div>
                  <h3 className="ecv-cv-subsection-article-title">
                    {education.educational}
                  </h3>
                  {/* <div className="ecv-cv-subsection-article-first"> */}
                  <p className="ecv-cv-subsection-article-subtitle">
                    {education.title} • {education.location}
                  </p>
                  <p className="ecv-cv-subsection-article-dates">
                    {education.start} - {education.end}
                  </p>
                  {/* </div> */}
                  <p className="ecv-cv-subsection-article-description">
                    {education.learnings}
                  </p>
                </div>
              </article>
            ))}
          </section>
          <section className="ecv-cv-section">
            <h1 className="ecv-cv-subsection-title">Work Experience</h1>
            {experienceData.map((experience) => (
              <article
                key={experience.company}
                className="ecv-cv-subsection-article"
              >
                {experience.logo ? (
                  <img
                    className="ecv-cv-photo-logo"
                    src={experience.logo}
                    alt={experience.company + " logo"}
                  />
                ) : (
                  <div className="ecv-cv-nophoto">
                    <Building2 width="40" height="40" />
                  </div>
                )}
                <div>
                  <h3 className="ecv-cv-subsection-article-title">
                    {experience.role}
                  </h3>
                  <p className="ecv-cv-subsection-article-subtitle">
                    {experience.company} • {experience.location}
                  </p>
                  <p className="ecv-cv-subsection-article-dates">
                    {experience.start} - {experience.end}
                  </p>
                  <p className="ecv-cv-subsection-article-description">
                    {experience.responsibilities}
                  </p>
                </div>
              </article>
            ))}
          </section>
        </>
      )}
    </div>
  );
}
