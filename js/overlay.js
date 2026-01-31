const overlay = document.querySelector(".overlay");
const button = document.querySelector(".delete-overlay");
const page = document.querySelector(".page-content");
const audio = document.getElementById("player");

const hasAccess = sessionStorage.getItem("access") === "true";

if (hasAccess) {
  overlay.style.display = "none";
  page.classList.add("fade-in");
  audio.play();
} else {
  overlay.style.display = "flex";
  audio.pause();
}

button.addEventListener("click", () => {
  sessionStorage.setItem("access", "true");

  audio.play();

  overlay.classList.add("fade-out");

  overlay.addEventListener(
    "transitionend",
    () => {
      overlay.style.display = "none";
      page.classList.add("fade-in");
    },
    { once: true },
  );
});
