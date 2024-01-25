document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay");
  const removeOverlayButton = document.querySelector(".delete-overlay");

  const access = localStorage.getItem("access") || "false";

  localStorage.setItem("access", access);

  overlay.style.display = access === "true" ? "none" : "flex";

  removeOverlayButton.addEventListener("click", function () {
    localStorage.setItem("access", "true");
    location.reload();
  });

  setTimeout(function () {
    localStorage.setItem("access", "false");
  }, 2000);
});
