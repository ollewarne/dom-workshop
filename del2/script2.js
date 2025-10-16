// driver Idris
// Navigator Olle och Axel.
// color #348AA7


const box1 = document.createElement('div');
const box2 = document.createElement('div');
const box3 = document.createElement('div');

const container = document.createElement('section');

box1.style.backgroundColor = 'green';
box2.style.backgroundColor = 'blue';
box3.style.backgroundColor = 'brown';

box1.textContent = 'Box 1 fick green färg';
box2.textContent = 'Box 2 fick blue färg';
box3.textContent = 'Box 3 fick brown färg';

function changeColor(event) {
    event.target.style.backgroundColor = 'pink';
}

//box1.addEventListener('mouseover', () => {
   // box1.style.backgroundColor = 'pink';
//})

box1.addEventListener('mouseover', changeColor); // callback function 

box2.addEventListener('mouseover', () => {
    box2.style.backgroundColor = 'purple';
})

box3.addEventListener('mouseover', () => {
    box3.style.backgroundColor = 'yellow';
})

box1.addEventListener('mouseout', () => {
    box1.style.backgroundColor = 'green';
})

box2.addEventListener('mouseout', () => {
    box2.style.backgroundColor = 'blue';
})

box3.addEventListener('mouseout', () => {
    box3.style.backgroundColor = 'brown';
})


document.body.appendChild(container);
container.appendChild(box1);
container.appendChild(box2);
container.appendChild(box3);