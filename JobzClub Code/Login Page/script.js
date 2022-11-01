const username = document.querySelector("#uname");
const password = document.querySelector("#pass");
const submit = document.querySelector(".submit");
const uerr = document.querySelector("#u-err");
const perr = document.querySelector("#p-err");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const uname = username.value;
  const pass = password.value;

  if (uname === "user" && pass === "user") {
    uerr.style.display = "none";
    perr.style.display = "none";
    alert("Login Success!");
  } else if (uname === "company" && pass === "company") {
    uerr.style.display = "none";
    perr.style.display = "none";
    alert("Login Success!");
  } else {
    uerr.style.display = "block";
    perr.style.display = "block";
  }
});
