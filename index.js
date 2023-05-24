import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"] input');
const searchButton = document.querySelector('[data-js="search-button"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  cardContainer.innerHTML = ""; // Empty the card container

  let url = `https://rickandmortyapi.com/api/character?page=${page}`;

  if (searchQuery) {
    url += `&name=${encodeURIComponent(searchQuery)}`;
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results;

      characters.forEach((character) => {
        const card = createCharacterCard(character);
        cardContainer.appendChild(card);
      });

      maxPage = data.info.pages;
      pagination.textContent = `Page ${page} of ${maxPage}`;
    })
    .catch((error) => console.log("Error:", error));
}

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  searchQuery = searchBar.value;
  page = 1; // Reset the page index when performing a new search
  fetchCharacters();
});

fetchCharacters();
