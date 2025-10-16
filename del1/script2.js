// Driver: Axel
// Navigator: Olle & Idris

const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");

button1.textContent = "Byt bakgrundsfärg";
button2.textContent = "Lägg till stycke";
button3.textContent = "Ta bort senaste stycke";
button4.textContent = "Byt namn";

document.body.appendChild(button1)
document.body.appendChild(button2)
document.body.appendChild(button3)
document.body.appendChild(button4)

button1.addEventListener("click", () => {
    document.body.style.background = "#e0f2fe";
} )

button2.addEventListener("click", () => {
    const paragraf = document.createElement("p");
    paragraf.textContent = "8 timmar / 7 timmar";
    paragraf.id = "paragraf";
    document.body.appendChild(paragraf);
})

button3.addEventListener("click", () => {
    const paragraf = document.getElementById("paragraf")
    document.body.removeChild(paragraf);
})

button4.addEventListener("click", () => {
    const heading = document.createElement("h2");
    heading.textContent = "Axel Olle Idris";
    document.body.appendChild(heading);
})