function dividirSpan() {
  const spanOriginal = document.getElementById("subtitle-br");
  const textoOriginal = spanOriginal.textContent;

  if (window.innerWidth <= 320) {
    const posicaoVirgula = textoOriginal.indexOf(",");

    if (posicaoVirgula !== -1) {
      const novoSpan1 = document.createElement("span");
      const novoSpan2 = document.createElement("span");

      novoSpan1.textContent = textoOriginal.substring(0, posicaoVirgula);
      novoSpan2.textContent = textoOriginal.substring(posicaoVirgula + 1);

      [novoSpan1, novoSpan2].forEach((span) => {
        span.classList.add("font-brs", "subtitle");
      });

      spanOriginal.replaceWith(novoSpan1, novoSpan2);
    }
  }
}

window.addEventListener("load", dividirSpan);
window.addEventListener("resize", dividirSpan);
