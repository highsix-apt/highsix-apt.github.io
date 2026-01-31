const overlay = document.querySelector(".overlay");
const button = document.querySelector(".delete-overlay");
const page = document.querySelector(".page-content");
const music = document.getElementById("music");
const rain = document.getElementById("rain");

const hasAccess = sessionStorage.getItem("access") === "true";

rain.volume = 0.5;

if (hasAccess) {
  overlay.style.display = "none";
  page.classList.add("fade-in");
  music.play();
  rain.play();
} else {
  overlay.style.display = "flex";
  music.pause();
  rain.pause();
}

button.addEventListener("click", () => {
  sessionStorage.setItem("access", "true");

  music.play();
  rain.play();

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
