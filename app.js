const sections = document.querySelectorAll(".section");
const controls = document.querySelectorAll(".controls");
const secBtns = document.querySelectorAll(".control");
const mainContent = document.querySelector(".main-content");

function PageTransitions() {
  //button click active class
  secBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      let currBtn = document.querySelector(".active-btn");
      currBtn.classList.remove("active-btn");
      this.classList.add("active-btn");
    });
  });
  //active sections
  mainContent.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      secBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      document.getElementById(id).classList.add("active");
    }
  });
}
PageTransitions();

//toggle theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  let body = document.body;
  body.classList.toggle("light-mode");
});

const aboutProgYears = document.getElementById("about-programming-years");
const aboutProgLangs = document.getElementById("about-programming-langs");
const aboutProjects = document.getElementById("about-projects");
const aboutCoding = document.getElementById("about-coding");

//about-programming-years on click switch to timeline

//about-programming-languages on click switch to skills section
aboutProgLangs.addEventListener("click", function () {
  //on click move to skills section
  document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
});

//about-projects on click switch to projects/portfolio section
aboutProjects.addEventListener("click", function () {
  document.querySelector(".active-btn").classList.remove("active-btn");
  document.querySelector(".control-3").classList.add("active-btn");
  document.getElementById("about").classList.remove("active");
  document.getElementById("portfolio").classList.add("active");
});

//about-coding on click switch to Neetcode 150 Writeups
aboutCoding.addEventListener("click", function () {
  window.open("https://tryyang2001.github.io/Neetcode-150-Writeups/");
});

//on click go to the link of the certificate
document
  .getElementById("orbital-cert-link")
  .addEventListener("click", function () {
    window.open(
      "https://credentials.nus.edu.sg/6d15e484-0d29-4764-b064-0e4e365eb04d"
    );
  });
document
  .getElementById("tiktok-cert-link")
  .addEventListener("click", function () {
    window.open(
      "https://bytedance.sg.feishu.cn/file/boxlg0toRhl1Y9QdXzKdx9nPlec"
    );
  });
