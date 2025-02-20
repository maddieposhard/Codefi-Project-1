import { favorites } from "../data/data.js";

const favoritesText = document.querySelector('.favorites-text')
const favoritesList = document.querySelector('.favorites-list')

function displayFavorites () {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>No favorites yet!</p>';
    } else {
        favorites.forEach (affirmation => {
            let favoritesListItem = document.createElement('li');
            favoritesListItem.textContent = affirmation;
            favoritesList.appendChild(favoritesListItem);
        })
    }
}

displayFavorites();

console.log(favorites)
