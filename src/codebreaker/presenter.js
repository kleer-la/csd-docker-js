// import Codebreaker from "./codebreaker";

const form = document.querySelector("#codebreaker-form");
const adivinar = document.querySelector("#numero")
const pistas = document.querySelector("#pistas");
const codigo = document.querySelector("#codigo");
const resultado = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const codebreaker = new Codebreaker(codigo.value)
  // codebreaker.adivinar(adivinar.value)
  // pistas.innerHTML = codebreaker.obtenerPistas()
  pistas.innerHTML = "! * - -"

  // if (codebreaker.ganoElJuego()) {
    resultado.innerHTML = "Ganó"
  // }
});
