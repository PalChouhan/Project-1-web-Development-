const jobsData = [
  {
    id: "Job1",
    title: "Android Development",
    desc: [
      "Experience 5 Years",
      "Android Studio",
      "Java Programming",
      "APIs",
      "Firebase",
    ],
    company: "SumatoSoft",
    deadline: "10-12-2022",
  },
  {
    id: "Job2",
    title: "Web Development",
    desc: [
      "Experience 2 Years",
      "HTML/CSS",
      "Java Script",
      "Frameworks",
      "Bootstrap",
    ],
    company: "WEZOM",
    deadline: "11-12-2022",
  },
  {
    id: "Jobe",
    title: "Project Manager",
    desc: [
      "Experience 3 Years",
      "Product Management",
      "Software Analysis",
      "Software Designs",
      "UML Tools",
    ],
    company: "iTechArt Group",
    deadline: "12-12-2022",
  },
  {
    id: "Job1",
    title: "React Native Developer",
    desc: [
      "Experience 2 Years",
      "Java Script",
      "React Frameworks",
      "React Libraries",
      "Mobile App Development",
    ],
    company: "Vasterra",
    deadline: "13-12-2022",
  },
  {
    id: "Job2",
    title: "Flutter Developer",
    desc: [
      "Experience 4 Years",
      "Flutter Tools",
      "Google Frameworks",
      "Google APIs",
      "Databases",
    ],
    company: "Google",
    deadline: "14-12-2022",
  },
  {
    id: "Jobe",
    title: "IOS Developer",
    desc: [
      "Experience 5 Years",
      "Objective C",
      "Swift",
      "IOS Frameworks",
      "Backend",
    ],
    company: "Apple",
    deadline: "15-12-2022",
  },
];

// Dom selection
const jobsTable = document.querySelector(".jobs-table");

jobsData.forEach((job, idx) => {
  const html = `<tr>
  <td id='col1' style = "width:0.8%;"> <img style='border-radius:5px' src='./images/job.png' width='120' height='120-' /></td>
  <td id='col2' style = "width:7%">
        <h3 class='job-title'> ${job.title} </h3>
        <h3 class='job-company'> ${job.company} </h3>
        <h3 class='job-deadline'> ${job.deadline} </h3>
  </td>
  <td id='col3' > <button class='button' onclick='applyButton()'> <a href='../Apply Job Page/index.html?id=${idx}' style=' text-decoration: none;'> Apply </a></button> </td>
</tr>
`;

  jobsTable.innerHTML += html;
});
