import "../styles/Cv.css";

export default function Cv({ educationData }) {
  return (
    <div className="ecv-cv">
      <section className="ecv-cv-education">
        <h1 className="ecv-cv-education-title">Education</h1>
        {educationData.map((education) => (
          <article>
            <h3 className="ecv-cv-education-article-educational">
              {education.educational}
            </h3>
            <p className="ecv-cv-education-article-title">{education.title}</p>
            <p className="ecv-cv-education-article-dates">
              {education.start}
              {education.end}
            </p>
          </article>
        ))}
        <article></article>
      </section>
    </div>
  );
}
