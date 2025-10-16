// Driver: Axel
// Navigatör: Olle & Idris

const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");

const heading = document.createElement("h2");
heading.textContent = "Nu händer det saker!";

document.body.appendChild(heading);

button1.textContent = "Byt rubrik";
document.body.appendChild(button1);

button1.addEventListener("click", () => {
    heading.textContent = "Ny rubrik";
})

const paragraf = document.createElement("p");
paragraf.textContent = "Jag gillar coding";
document.body.appendChild(paragraf)

button2.textContent = "Byt p";
document.body.appendChild(button2)

button2.addEventListener("click", () => {
    paragraf.textContent = "Jag har blivit förälskad i coding";
})

button3.textContent = "Byt färg";
document.body.appendChild(button3);

button3.addEventListener("click", () => {
    heading.style.color = "#dc2626";
})