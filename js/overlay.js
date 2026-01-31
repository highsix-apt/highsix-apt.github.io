const overlay = document.querySelector(".overlay");
const button = document.querySelector(".delete-overlay");

const hasAccess = sessionStorage.getItem("access") === "true";

if (hasAccess) {
  overlay.style.display = "none";
  document.querySelector(".page-content").classList.add("fade-in");
} else {
  overlay.style.display = "flex";
}

button.addEventListener("click", () => {
  sessionStorage.setItem("access", "true");

  overlay.classList.add("fade-out");

  overlay.addEventListener(
    "transitionend",
    () => {
      overlay.style.display = "none";
      document.querySelector(".page-content").classList.add("fade-in");
    },
    { once: true },
  );
});
