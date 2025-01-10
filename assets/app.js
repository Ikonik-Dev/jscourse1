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
let a = 5;
let b = 10;
// Échangez les valeurs de a et b sans utiliser de variable temporaire
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

let num1 = 15;
let num2 = 25;
// Calculez la somme de num1 et num2 et stockez-la dans une nouvelle variable sum
let sum = num1 + num2;
console.log(sum);
let firstName = "John";
let lastName = "Doe";
// Concaténez firstName et lastName pour créer une nouvelle variable fullName
let fullName = firstName + ' ' + lastName;
console.log(fullName);
let count = 0;
// Incrémentez count de 1, puis décrémentez-le de 2
count++;
count--;
console.log(count);
let strNumber = "123";
// Convertissez strNumber en un nombre entier et stockez-le dans une nouvelle variable intNumber
let intNumber = parseInt(strNumber);
console.log(intNumber);


// TODO: j'ajoute un event listener sur le bouton pour changer la couleur du h1
