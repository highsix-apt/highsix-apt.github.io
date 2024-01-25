let makeItRain = function () {
  document.querySelector(".rain.front-row").innerHTML = "";
  document.querySelector(".rain.back-row").innerHTML = "";

  let increment = 0;
  let drops = "";
  let backDrops = "";

  while (increment < 100) {
    let randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
    let randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);

    increment += randoFiver;

    drops +=
      '<div class="drop" style="left: ' +
      (increment > 98 ? 98 : increment) +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 100) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
    backDrops +=
      '<div class="drop" style="right: ' +
      (increment > 98 ? 98 : increment) +
      "%; bottom: " +
      (randoFiver + randoFiver - 1 + 100) +
      "%; animation-delay: 0." +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"><div class="stem" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div><div class="splat" style="animation-delay: 0.' +
      randoHundo +
      "s; animation-duration: 0.5" +
      randoHundo +
      's;"></div></div>';
  }

  document.querySelector(".rain.front-row").innerHTML = drops;
  document.querySelector(".rain.back-row").innerHTML = backDrops;
};

makeItRain();
