import { favorites } from "../data/data.js";

const favoritesText = document.querySelector('.favorites-text')

function displayFavorites () {
    favoritesText.textContent = favorites
}

console.log(favorites)
