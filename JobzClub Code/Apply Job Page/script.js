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

const jobDetails = document.querySelector(".job");

const tokens = window.location.href.split("?");
const id = parseInt(tokens[1].split("=")[1]);

const job = jobsData[id];
const html = `<h2
style="font-size: 30px; text-align: center; color: rgb(204, 255, 0)"
>
${job.title}
</h2>
<h2
style="
  font-size: 22px;
  margin-top: 8%;
  color: rgb(2, 67, 124);
  text-align: center;
"
>
${job.company}
</h2>
<p style="margin-top: 10%; font-weight:bold">
Following points must be cosidered for this job:
</p>

<ul>
    <li>${job.desc[0]} </li>
    <li>${job.desc[1]} </li>
    <li>${job.desc[2]} </li>
    <li>${job.desc[3]} </li>
    <li>${job.desc[4]} </li>
</ul>

<h2
style="
  font-size: 22px;
  margin-top: 10%;
  color: rgb(255, 0, 0);
  text-align: center;
"
>
${job.deadline}
</h2>`;

jobDetails.insertAdjacentHTML("beforeend", html);

const submit = document.querySelector(".submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Your application has been uploaded. Thankyou!");
});
