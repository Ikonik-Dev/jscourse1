// je selectionne et je stocke le h1 dans une variable
let h1 = document.querySelector('h1');

// j'ajoute un bouton sur dans le .container de mon body
let button = document.createElement('button');
button.textContent = 'Click me';
button.style.backgroundColor = '#14bc8f';
button.style.color = 'white';
button.style.padding = '10px';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';


document.querySelector('.container').appendChild(button);

// je crée une fonction qui change la couleur du h1
function changeColor() {
    h1.style.color = 'red';
}

// TODO: j'ajoute un event listener sur le bouton pour changer la couleur du h1
