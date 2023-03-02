const cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const pintas = ["♦", "♥", "♠", "♣"];

// funcion General Valores Aleatorios

function generateRandomValue(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function createRandomPokerCard() {

// Valores Aletorios
let randomValue = generateRandomValue(cardValues);
let randomPintas = generateRandomValue(pintas);

//Condiciones para las pintas
let color = "black";
if (randomPintas === "♦" || randomPintas === "♥") {
  color = "red";
}
cardNum.innerHTML = randomValue;
cardDown.innerHTML = randomPintas;
cardUp.innerHTML = randomPintas;

cardUp.style.color = color;
cardDown.style.color = color;
cardNum.style.color  = color;
}

//HTML
let container = document.querySelector(".card-container")
let card = document.getElementById("card");

// Creando Iconos (3 elementos).
let cardNum = document.createElement("h1");
let cardUp = document.createElement("h1");
let cardDown = document.createElement("h1");

//---- Hijos de Card- Container

// Icono superior
card.appendChild(cardUp);
// Icono Numeral
card.appendChild(cardNum);
// Icono inferior
card.appendChild(cardDown);

// ----- Style -----

// container(Fondo)
container.style.display = "flex";
container.style.backgroundColor = "green";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.height = "55vw";
container.style.width = "100vw";

//----Card--------
card.style.padding = "50px";
card.style.borderRadius = "10px";
card.style.border = "1px solid black";
card.style.height = "350px";
card.style.width = "200px"; 
card.style.backgroundColor = "white";
card.style.display = "flex";
card.style.flexDirection = "column";
card.style.justifyContent= "space-between";

//------ Pinta Up ---
cardUp.style.fontSize = '50px'

//------ Pinta Dow ---
cardDown.style.fontSize = '50px'
cardDown.style.transform = "rotate(180deg)";

//------  # Aletorios---
cardNum.style.textAlign = 'center';
cardNum.style.fontSize = '50px'

//------ Button----

window.onload = createRandomPokerCard();
let cardButton = document.getElementById ("changebutton");
cardButton.addEventListener("click", _ =>  {
     createRandomPokerCard();
    });

cardButton.style.margin = "10px"








































 
//card (carta)



