export const education = [
  {
    label: "Educational Institution",
    for: "educational",
    type: "text",
    description:
      "Enter the name of the school, college, or university you attended.",
    required: true,
  },
  {
    label: "Institution Logo",
    for: "logo",
    type: "file",
    description:
      "Upload the logo of the educational institution (PNG or JPEG).",
    required: false,
  },
  {
    label: "Title",
    for: "title",
    type: "text",
    description: "Specify the degree, diploma, or certification you earned.",
    required: true,
  },
  {
    label: "Location",
    for: "location",
    type: "text",
    description: "Specify where you study, such as the city and country.",
    required: true,
  },
  {
    label: "Key Learnings",
    for: "learnings",
    type: "textarea",
    description:
      "Summarize what you learned or the skills you developed in this program.",
    required: false,
    min: "0",
    max: "300",
  },
  {
    label: "Currently doing it",
    for: "currently",
    type: "checkbox",
    description:
      "Check this box if you are currently enrolled in this education program.",
    required: false,
  },
  {
    label: "Start Date",
    for: "start",
    type: "month",
    description: "Select the date you began this educational program.",
    required: true,
  },
  {
    label: "End Date",
    for: "end",
    type: "month",
    description:
      "Select the date you completed or expect to complete the program.",
    required: false,
  },
];

export const experience = [
  {
    label: "Role",
    for: "role",
    type: "text",
    description: "State the job title or position you held in the company.",
    required: true,
  },
  {
    label: "Company",
    for: "company",
    type: "text",
    description: "Enter the name of the organization where you worked.",
    required: true,
  },
  {
    label: "Company Logo",
    for: "logo",
    type: "file",
    description: "Upload the logo of the company (PNG or JPEG).",
    required: false,
  },
  {
    label: "Key Responsibilities",
    for: "responsibilities",
    type: "textarea",
    description: "Describe your main duties and contributions in this role.",
    required: false,
    min: "0",
    max: "300",
  },
  {
    label: "Location",
    for: "location",
    type: "text",
    description: "Specify where you worked, such as the city and country.",
    required: true,
  },
  {
    label: "Currently doing it",
    for: "currently",
    type: "checkbox",
    description: "Check this if you're still working in this role.",
    required: false,
  },
  {
    label: "Start Date",
    for: "start",
    type: "month",
    description: "Select the date you started this role.",
    required: true,
  },
  {
    label: "End Date",
    for: "end",
    type: "month",
    description: "Select the date you left this role.",
    required: false,
  },
];

export const personal = [
  {
    label: "Name",
    for: "name",
    type: "text",
    description:
      "Enter your first and last name as you'd like it to appear on your CV.",
    required: true,
  },
  {
    label: "Profile photo",
    for: "photo",
    type: "file",
    description:
      "Upload a professional headshot  to include on your CV. Use a clear, recent photo with a neutral background.",
    required: false,
  },
  {
    label: "Short bio",
    for: "bio",
    type: "textarea",
    description:
      "Briefly introduce yourself, including your background and career focus. Between 150-300 characters.",
    required: true,
    min: "150",
    max: "300",
  },
  {
    label: "Role",
    for: "role",
    type: "text",
    description:
      "Enter your current job title or the professional role you identify with.",
    required: true,
  },
  {
    label: "Email",
    for: "email",
    type: "email",
    description:
      "Use a professional email you regularly check — recruiters may contact you here.",
    required: true,
  },
  {
    label: "Telephone",
    for: "telephone",
    type: "tel",
    description:
      "Include a number where you can be easily reached for job opportunities.",
    required: true,
  },
  {
    label: "LinkedIn",
    for: "linkedin",
    type: "text",
    description:
      "Paste the full URL to your LinkedIn profile (e.g., https://linkedin.com/in/yourname).",
    required: true,
  },
];

export const extras = [
  {
    label: "Skills",
    for: "skills",
    type: "chips",
    description:
      "Add your key professional or technical skills (e.g., JavaScript, React, C#).",
    required: false,
    max: "7",
  },
  {
    label: "Languages",
    for: "languages",
    type: "chips",
    description: "List the languages you speak (e.g., English, Spanish).",
    required: false,
    max: "7",
  },
];
