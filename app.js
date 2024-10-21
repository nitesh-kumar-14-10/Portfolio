// ...................... theme changer .....................
let toggleBtn = document.getElementById("toggle-btn");
let toggleBtnText = document.getElementById("toggle-btn-text");
let toggleBtnIcon = document.getElementById("toggle-btn-icon");
let logoImg = document.getElementById("logo-img");

toggleBtn.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    toggleBtnText.innerHTML = "Light";
    toggleBtnIcon.classList = "fa-solid fa-sun fa-2xl";
    logoImg.src = "images/logo-dark.png";
  } else {
    toggleBtnText.innerHTML = "Dark";
    toggleBtnIcon.classList = "fa-solid fa-moon fa-2xl";
    logoImg.src = "images/logo-light.png";
  }
};

// ..................... making navbar change color while scrolling .....................
const nav = document.querySelector("nav");
const scrollWatcher = document.createElement("div");
scrollWatcher.setAttribute("data-scroll-watcher", "");
nav.before(scrollWatcher);
const navObserver = new IntersectionObserver((entries) => {
  console.log(entries);
  nav.classList.toggle("sticking", !entries[0].isIntersecting);
});
navObserver.observe(scrollWatcher);

// ...................... nav responsiveness .....................
var navSmall = document.querySelector(".hamburger");
var navList = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

navSmall.addEventListener("click", function () {
  this.classList.toggle("click");
  navList.classList.toggle("open");
});
