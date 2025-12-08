// Mini-Script nur für das Mobile-Menü
const nav = document.querySelector("nav");
const toggle = document.querySelector(".nav-toggle");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}
