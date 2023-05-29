/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function createCardList() {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

    let cardList = [];

    for (let s = 0; s < suits.length; s++) {
      for (let n = 0; n < numbers.length; n++) {
        const value = numbers[n];
        const suit = suits[s];

        cardList.push({ value, suit });
      }
    }
    return cardList;
  }

  const getCards = () => {
    let cards = createCardList();

    let random = Math.floor(Math.random() * 51);

    let cardValue = cards[random].value;

    let cardSuit = cards[random].suit;

    let card = document.createElement("div");
    card.classList.add("card", cardSuit.toLowerCase());

    let entity;
    if (cardSuit == "Diamonds") {
      entity = "♦";
    } else entity = "&" + cardSuit.toLowerCase() + ";";

    card.innerHTML =
      '<span class="card-value-suit top">' +
      entity +
      "</span>" +
      '<span class="card-suit">' +
      cardValue +
      "</span>" +
      '<span class="card-value-suit bot">' +
      entity +
      "</span>";
    document.body.appendChild(card);
  };

  getCards();
  //   console.log("This is working!");

  let btn = document.getElementById("watchButton");

  const refreshPage = () => {
    location.reload();
  };

  btn.addEventListener("click", refreshPage);
};
