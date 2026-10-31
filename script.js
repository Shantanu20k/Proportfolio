document.getElementById("year").textContent = new Date().getFullYear();

const themeButton = document.getElementById("theme");
function label() {
  const theme = document.documentElement.getAttribute("data-theme");
  themeButton.textContent = theme === "light" ? "Dark" : "Light";
}
label();
themeButton.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  try { localStorage.setItem("sm-theme", next); } catch (e) {}
  label();
});

const links = document.querySelectorAll(".nav nav a");
const sections = [...links].map((link) => document.querySelector(link.getAttribute("href")));
window.addEventListener("scroll", () => {
  let current = sections[0];
  sections.forEach((section) => {
    if (section && window.scrollY >= section.offsetTop - 120) current = section;
  });
  links.forEach((link) => {
    link.style.color = current && link.getAttribute("href") === "#" + current.id ? "var(--ink)" : "";
  });
});
