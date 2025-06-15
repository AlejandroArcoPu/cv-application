import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import "../styles/Cv.css";
import graduation from "../assets/graduation.png";
import building from "../assets/building.png";
import user3 from "../assets/user3.png";

const styles = StyleSheet.create({
  cv: {
    padding: 50,
    fontSize: 11,
    fontFamily: "Helvetica",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "100%",
  },
  containerImage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 999,
    objectFit: "cover",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  personal: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 4,
  },

  personalContact: {
    opacity: "0.6",
  },

  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    marginBottom: 10,
  },
  chipContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  chip: {
    padding: "4 10",
    backgroundColor: "#e9e9e9",
    margin: 2,
    borderRadius: 10,
    opacity: "0.5",
  },
  article: {
    display: "flex",
    gap: 10,
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "flex-start",
  },
  articleTitle: {
    fontWeight: "bold",
    marginBottom: 2,
  },
  articleSubtitle: {
    fontWeight: 200,
    marginBottom: 2,
  },
  articleDates: {
    fontWeight: 500,
    marginBottom: 2,
  },
  articleDescription: {
    opacity: "0.4",
    marginTop: "10",
    paddingRight: 40,
  },

  logo: {
    width: 20,
    height: 20,
    borderRadius: "999",
    objectFit: "cover",
  },
});

export default function CvPdf({
  personalData,
  skillsChip,
  languagesChip,
  educationData,
  experienceData,
}) {
  return (
    <Document>
      <Page size="A4" style={styles.cv}>
        {Object.keys(personalData).length !== 0 && (
          <>
            <View style={styles.containerImage}>
              {personalData.photo ? (
                <Image style={styles.image} src={personalData.photo} />
              ) : (
                <Image style={styles.image} src={user3} />
              )}
              <View style={styles.personal}>
                <Text style={styles.title}>{personalData.name}</Text>
                <Text>{personalData.role}</Text>
                <Text style={styles.personalContact}>
                  {personalData.telephone} | {personalData.email} |{" "}
                  {personalData.linkedin}
                </Text>
              </View>
            </View>

            <View>
              <Text style={styles.subtitle}>Short Bio</Text>
              <Text style={styles.text}>{personalData.bio}</Text>
            </View>

            <View>
              <Text style={styles.subtitle}>Skills</Text>
              <View style={styles.chipContainer}>
                {skillsChip &&
                  skillsChip.map((skill, index) => (
                    <Text key={index} style={styles.chip}>
                      {skill}
                    </Text>
                  ))}
              </View>
            </View>
            <View>
              <Text style={styles.subtitle}>Languages</Text>
              <View style={styles.chipContainer}>
                {languagesChip &&
                  languagesChip.map((lang, index) => (
                    <Text key={index} style={styles.chip}>
                      {lang}
                    </Text>
                  ))}
              </View>
            </View>
          </>
        )}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Education</Text>
          {educationData &&
            educationData.map((education) => (
              <View key={education.title} style={styles.article}>
                {education.logo ? (
                  <Image style={styles.logo} src={education.logo} />
                ) : (
                  <Image style={styles.logo} src={graduation} />
                )}
                <View>
                  <Text style={styles.articleTitle}>
                    {education.educational}
                  </Text>
                  <Text style={styles.articleSubtitle}>
                    {education.title} • {education.location}
                  </Text>
                  <Text style={styles.articleDates}>
                    {education.start} - {education.end}
                  </Text>
                  <Text style={styles.articleDescription}>
                    {education.learnings}
                  </Text>
                </View>
              </View>
            ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Work Experience</Text>
          {experienceData &&
            experienceData.map((experience) => (
              <View key={experience.company} style={styles.article}>
                {experience.logo ? (
                  <Image
                    style={styles.logo}
                    src={experience.logo}
                    alt={experience.company + " logo"}
                  />
                ) : (
                  <Image style={styles.logo} src={building} />
                )}
                <View>
                  <Text style={styles.articleTitle}>{experience.role}</Text>
                  <Text style={styles.articleSubtitle}>
                    {experience.company} • {experience.location}
                  </Text>
                  <Text style={styles.articleDates}>
                    {experience.start} - {experience.end}
                  </Text>
                  <Text style={styles.articleDescription}>
                    {experience.responsibilities}
                  </Text>
                </View>
              </View>
            ))}
        </View>
      </Page>
    </Document>
  );
}
