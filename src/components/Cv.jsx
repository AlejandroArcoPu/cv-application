import "../styles/Cv.css";
import { CircleUserRound } from "lucide-react";
import {
  GraduationCap,
  Building2,
  BrushCleaning,
  Download,
} from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CvPdf from "./CvPdf";
import Arrow from "../assets/Arrow";

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

  return (
    <div
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
          <div className="ecv-cv-buttons no-data">
            <div className="ecv-cv-details">
              <p className="ecv-cv-details-text">Download your CV for free!</p>
              <Arrow width={80} color="#ed89ce" cls="ecv-cv-details-arrow " />
            </div>
            <button
              type="button"
              className="ecv-cv-button"
              onClick={handleClean}
            >
              <BrushCleaning />
            </button>

            <PDFDownloadLink
              className="ecv-cv-button"
              document={
                <CvPdf
                  personalData={personalData}
                  skillsChip={skillsChip}
                  languagesChip={languagesChip}
                  educationData={educationData}
                  experienceData={experienceData}
                />
              }
              fileName="EasyCV.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : <Download />
              }
            </PDFDownloadLink>
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
                  <p className="ecv-cv-subsection-article-subtitle">
                    {education.title} • {education.location}
                  </p>
                  <p className="ecv-cv-subsection-article-dates">
                    {education.start} - {education.end}
                  </p>
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
