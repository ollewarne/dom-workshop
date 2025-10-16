// Driver: Axel
// Navigatör: Olle & idris

const list = document.createElement("ul");
const item1 = document.createElement("li");
const item2 = document.createElement("li");
const item3 = document.createElement("li");
const item4 = document.createElement("li");
const item5 = document.createElement("li");

document.body.appendChild(list);

item1.textContent = "Vaknat";
item1.style.color ="#1e3a8a";
list.appendChild(item1);

item2.textContent = "Ätit frukost";
item2.style.color = "#059669";
list.appendChild(item2);

item3.textContent = "Startat Zoom";
item3.style.color = "#f97316";
list.appendChild(item3);

item4.textContent = "Börjat lektionen";
item4.style.color = "#2563eb";
list.appendChild(item4);

item5.textContent = "Gjort övning 4";
item5.style.color = "#475569";
list.appendChild(item5);

item3.textContent = "Det här ändrades i Javascript";

item5.remove()