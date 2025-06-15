import "../styles/Edit.css";
import Underline from "../assets/Underline";
import { fileToBase64 } from "../utils/fileToBase64";
import Menu from "./Menu";
import { useState, useEffect } from "react";
import Forms from "./Forms";
import Cv from "./Cv";
import CvPdf from "./CvPdf";
import formatDate from "../utils/formatDate";
import guidGenerator from "../utils/guidGenerator";
import { PDFViewer } from "@react-pdf/renderer";

export default function Edit() {
  const [active, setActive] = useState("Personal Information");
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [personalData, setPersonalData] = useState({});
  const [extraData, setExtraData] = useState([]);

  const removeEducationData = (id) => {
    const newEducationData = educationData.filter(
      (education) => education.id !== id
    );
    setEducationData(newEducationData);
    localStorage.setItem("educationData", JSON.stringify(newEducationData));
  };

  const removeExperienceData = (id) => {
    const newExperienceData = experienceData.filter(
      (experience) => experience.id !== id
    );
    setExperienceData(newExperienceData);
    localStorage.setItem("experienceData", JSON.stringify(newExperienceData));
  };

  const handlePersonalData = (data) => {
    const file = data.photo?.[0];

    const savePersonal = (photo) => {
      const newPersonal = {
        ...data,
        photo: photo,
      };
      setPersonalData(newPersonal);
      localStorage.setItem("personalData", JSON.stringify(newPersonal));
    };

    if (file) {
      fileToBase64(file)
        .then((base64) => {
          savePersonal(base64);
        })
        .catch((err) => {
          console.error("Error converting file to base64:", err);
          savePersonal(null);
        });
    } else {
      savePersonal(null);
    }
  };

  const handleEducationData = (data) => {
    const file = data.logo?.[0];

    const saveEducation = (logo) => {
      const newEducation = {
        ...data,
        id: guidGenerator(),
        logo: logo,
        start: formatDate(data.start),
        end: !data.end || data.end === "" ? "present" : formatDate(data.end),
      };

      setEducationData((prev) => {
        const updated = [...prev, newEducation];
        localStorage.setItem("educationData", JSON.stringify(updated));
        return updated;
      });
    };

    if (file) {
      fileToBase64(file)
        .then((base64) => {
          saveEducation(base64);
        })
        .catch((err) => {
          console.error("Error converting file to base64:", err);
          saveEducation(null);
        });
    } else {
      saveEducation(null);
    }
  };

  const handleExperienceData = (data) => {
    const file = data.logo?.[0];

    const saveExperience = (logo) => {
      const newExperience = {
        ...data,
        id: guidGenerator(),
        logo: logo,
        start: formatDate(data.start),
        end: !data.end || data.end === "" ? "present" : formatDate(data.end),
      };
      setExperienceData((prev) => {
        const updated = [...prev, newExperience];
        localStorage.setItem("experienceData", JSON.stringify(updated));
        return updated;
      });
    };

    if (file) {
      fileToBase64(file)
        .then((base64) => {
          saveExperience(base64);
        })
        .catch((err) => {
          console.error("Error converting file to base64:", err);
          saveExperience(null);
        });
    } else {
      saveExperience(null);
    }
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
          localStorage.setItem("extraData", JSON.stringify(updatedData));
        }
      } else {
        setExtraData([...extraData, { [name]: [value] }]);
        localStorage.setItem(
          "extraData",
          JSON.stringify([...extraData, { [name]: [value] }])
        );
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
    localStorage.setItem("extraData", JSON.stringify([newExtraData]));
  };

  useEffect(() => {
    const savedPersonalData = JSON.parse(localStorage.getItem("personalData"));
    const savedExperienceData = JSON.parse(
      localStorage.getItem("experienceData")
    );
    const savedEducationData = JSON.parse(
      localStorage.getItem("educationData")
    );
    const savedExtraData = JSON.parse(localStorage.getItem("extraData"));
    if (savedPersonalData) {
      setPersonalData(savedPersonalData);
    }
    if (savedExperienceData) {
      setExperienceData(savedExperienceData);
    }
    if (savedEducationData) {
      setEducationData(savedEducationData);
    }

    if (savedExtraData) {
      setExtraData(savedExtraData);
    }
  }, []);

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
