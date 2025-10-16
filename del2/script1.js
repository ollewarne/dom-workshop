// driver Idris
// Navigator Olle och Axel.
// color #348AA7

const paragraf = document.querySelector('p');

const changeColor = document.getElementById('buttonOne');
changeColor.addEventListener('click', () => {
    paragraf.style.background = '#348AA7';
})

const addText = document.getElementById('buttonTwo');
addText.addEventListener('click', () => {
    paragraf.textContent = paragraf.textContent + ' Hejsan spesan tejsan.';
})

const removeText = document.getElementById('buttonThree');
removeText.addEventListener('click', () => {
     // paragraf.remove();
     paragraf.textContent = '';
})



