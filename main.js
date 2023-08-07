const toggleButton = document.getElementsByClassName("toggle")[0];
const links = document.getElementsByClassName("links")[0];

toggleButton.addEventListener("click", () => {
  links.classList.toggle("active");
});

const div = document.querySelector("div");
for (let i = 0; i < 100; i++) {
  const p = document.createElement("p");
  p.textContent = i;
  div.appendChild(p);
}
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
