import "../styles/Edit.css";
import Divider from "./Divider";
import Underline from "../assets/Underline";

import Menu from "./Menu";
import { useState } from "react";
import Forms from "./Forms";
import Cv from "./Cv";
import formatDate from "../utils/formatDate";
import guidGenerator from "../utils/guidGenerator";
import { useForm } from "react-hook-form";

export default function Edit() {
  const [active, setActive] = useState("Personal Information");
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [personalData, setPersonalData] = useState({});
  const [extraData, setExtraData] = useState([]);

  const { resetField, reset } = useForm();

  const removeEducationData = (id) => {
    const newEducationData = educationData.filter(
      (education) => education.id !== id
    );
    setEducationData(newEducationData);
  };

  const removeExperienceData = (id) => {
    const newExperienceData = experienceData.filter(
      (experience) => experience.id !== id
    );
    setExperienceData(newExperienceData);
  };

  const handlePersonalData = (e) => {
    const file = e.photo[0];
    const url = URL.createObjectURL(file);
    const newPersonal = { ...e, photo: url };
    setPersonalData(newPersonal);
  };

  const handleEducationData = (e) => {
    e.preventDefault();
    const newEducation = {};

    Array.from(e.target.elements)
      .filter(
        (element) =>
          (element.tagName === "INPUT" || element.tagName === "TEXTAREA") &&
          element.name
      )
      .forEach((element) => {
        if (element.type === "month") {
          if (element.value === "") {
            newEducation[element.name] = "Present";
          } else {
            newEducation[element.name] = formatDate(element.value);
          }
        } else if (element.type === "file") {
          newEducation[element.name] = "";
          const fileInput = e.target.elements.logo;
          if (fileInput && fileInput.files[0]) {
            const file = fileInput.files[0];
            const url = URL.createObjectURL(file);
            newEducation[element.name] = url;
          }
        } else {
          newEducation[element.name] = element.value;
        }
        element.value = "";
      });

    newEducation["id"] = guidGenerator();
    setEducationData((prev) => [...prev, newEducation]);
  };

  const handleExperienceData = (e) => {
    e.preventDefault();
    const newExperience = {};

    Array.from(e.target.elements)
      .filter(
        (element) =>
          (element.tagName === "INPUT" || element.tagName === "TEXTAREA") &&
          element.name
      )
      .forEach((element) => {
        if (element.type === "month") {
          if (element.value === "") {
            newExperience[element.name] = "present";
          } else {
            newExperience[element.name] = formatDate(element.value);
          }
        } else if (element.type === "file") {
          newExperience[element.name] = "";
          const fileInput = e.target.elements.logo;
          if (fileInput && fileInput.files[0]) {
            const file = fileInput.files[0];
            const url = URL.createObjectURL(file);
            newExperience[element.name] = url;
          }
        } else {
          newExperience[element.name] = element.value;
        }
        element.value = "";
      });
    newExperience["id"] = guidGenerator();
    setExperienceData((prev) => [...prev, newExperience]);
  };

  const handleExtraData = (e, name, max) => {
    const value = e.target.value.trim();
    if (e.key === "," && value) {
      e.preventDefault();

      const index = extraData.findIndex((obj) => obj[name]);

      const updatedData = [...extraData];

      if (index !== -1) {
        const existingValues = updatedData[index][name];

        if (!existingValues.includes(value) && existingValues.length < max) {
          updatedData[index][name] = [...existingValues, value];
          setExtraData(updatedData);
        }
      } else {
        setExtraData([...extraData, { [name]: [value] }]);
      }

      e.target.value = "";
    }
  };

  const removeExtraData = (index, chip, name) => {
    const newExtraData = [...extraData];
    newExtraData[index][name] = newExtraData[index][name].filter(
      (c) => c !== chip
    );
    setExtraData(newExtraData);
  };

  return (
    <section className="ecv-edit">
      <div className="ecv-edit-title">
        <h1 className="ecv-edit-title-content">
          {" "}
          Design your CV effortlessly and land your{" "}
          <div className="ecv-edit-title-highlight">
            <span>ideal job!</span>
            <Underline
              className="ecv-edit-title-highlight-img"
              color="#ed89ce"
            />
          </div>
        </h1>
      </div>
      <div className="ecv-edit-content">
        <Menu active={active} setActive={setActive} />
        <Forms
          active={active}
          handleEducationData={handleEducationData}
          educationData={educationData}
          removeEducationData={removeEducationData}
          handleExperienceData={handleExperienceData}
          experienceData={experienceData}
          removeExperienceData={removeExperienceData}
          handlePersonalData={handlePersonalData}
          extraData={extraData}
          handleExtraData={handleExtraData}
          removeExtraData={removeExtraData}
        />
        <Cv
          educationData={educationData}
          experienceData={experienceData}
          personalData={personalData}
          extraData={extraData}
          setExtraData={setExtraData}
          setPersonalData={setPersonalData}
          setExperienceData={setExperienceData}
          setEducationData={setEducationData}
        />
      </div>
    </section>
  );
}
