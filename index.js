import { createCharacterCard } from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  cardContainer.innerHTML = ""; // Empty the card container

  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results.slice(0, 20); // Get the first 20 characters

      characters.forEach((character) => {
        const card = createCharacterCard(character);
        cardContainer.appendChild(card);
      });
    })
    .catch((error) => console.log("Error:", error));
}

fetchCharacters();
