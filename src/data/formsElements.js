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
    label: "Title",
    for: "title",
    type: "text",
    description: "Specify the degree, diploma, or certification you earned.",
    required: true,
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
