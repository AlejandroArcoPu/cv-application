import "../styles/Edit.css";
import Divider from "./Divider";
import Menu from "./Menu";
import { useState } from "react";
import Forms from "./Forms";
import Cv from "./Cv";

export default function Edit() {
  const [active, setActive] = useState("Personal Information");
  const [educationData, setEducationData] = useState([]);

  const handleEducationData = (e) => {
    e.preventDefault();
    const newEducation = {};

    Array.from(e.target.elements)
      .filter((element) => element.tagName === "INPUT" && element.name)
      .forEach((element) => {
        newEducation[element.name] = element.value;
        element.value = "";
      });

    setEducationData((prev) => [...prev, newEducation]);
  };

  return (
    <section className="ecv-edit">
      <div>
        {/* <h1 className="ecv-edit-title">Edit</h1> */}
        <p className="ecv-edit-subtitle">
          Design your CV effortlessly and land your ideal job!
        </p>
      </div>
      <div className="ecv-edit-content">
        <Menu active={active} setActive={setActive} />
        <Forms
          active={active}
          handleEducationData={handleEducationData}
          educationData={educationData}
        />
        <Cv educationData={educationData} />
      </div>
    </section>
  );
}
