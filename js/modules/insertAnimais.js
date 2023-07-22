import fetchAnimais from "./fetchAnimais.js";

export default async function insertAnimais() {
  const animais = await fetchAnimais("../json/animais.json");
  const listaDoc = document.querySelector("#numeros > .lista");

  animais.animais.forEach((animal) => {
    const container = document.createElement("li");
    container.innerHTML += `<h2>${animal.nome}</h2>
    <span>${animal.quantidade}</span>`;
    listaDoc.appendChild(container);
  });
}
