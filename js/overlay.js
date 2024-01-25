const access = localStorage.getItem("access") || "false";
localStorage.setItem("access", access);

document.body.style.opacity = access === "true" ? 0 : 1;

const overlay = document.querySelector(".overlay");
const removeOverlayButton = document.querySelector(".delete-overlay");

overlay.style.display = access === "true" ? "none" : "flex";

removeOverlayButton.addEventListener("click", function () {
  localStorage.setItem("access", "true");
  document.body.style.opacity = 0;
  location.reload();
});

setTimeout(function () {
  document.body.style.opacity = 1;
  localStorage.setItem("access", "false");
}, 2000);
