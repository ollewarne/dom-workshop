// Navigator: Axel
// Driver: Olle & Idris

const titel = document.createElement('h2');
titel.textContent = "Min rubrik för dagen";
titel.style.color = "#1e3a8a";

const paragraf = document.createElement('p');
paragraf.textContent = "Helt okej väder idag";
paragraf.style.color = "#fef3c7";

const box = document.createElement('div');
box.textContent = "Det här är en färgad ruta";
box.style.background = "#10b981";

document.body.appendChild(titel)
document.body.appendChild(paragraf)
document.body.appendChild(box)

paragraf.textContent = "16 oktober"

