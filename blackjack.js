let sum = 0;
let cards = [];
let hasBlackjack = false;
let isAlive = true;
let message = "";
let player = {
  name: "JustMe", 
  chips: 500
}

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let newCardEl = document.getElementById("newcard-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $"+ player.chips;

function getRandomCard() {
    let randomCards = Math.floor(Math.random()*13) + 1
    if (randomCards > 10) {
        return 11
    } else if (randomCards === 1) {
        return 11
    } else {
        return randomCards
    }

}

function startGame() {
    let isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let c = 0; c < cards.length; c++) {
    cardsEl.textContent += cards[c] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!🥳";
    hasBlackjack = true;
  } else {
    message = "Oops! You're out of the game😭";
    isAlive = false;
  }

  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame();
  }
}

