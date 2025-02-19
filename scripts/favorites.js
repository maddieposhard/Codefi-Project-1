import { favorites } from "../data/data.js";

const favoritesText = document.querySelector('.favorites-text')
const favoritesList = document.querySelector('.favorites-list')

function displayFavorites () {
    let favoriteAffirmations = JSON.parse(localStorage.getItem('favorites'));
    if (favoriteAffirmations.length === 0) {
        favoritesList.innerHTML = '<p>No favorites yet!</p>';
    } else {
        favoriteAffirmations.forEach (affirmation => {
            let favoritesListItem = document.createElement('li');
            favoritesListItem.textContent = affirmation;
            favoritesList.appendChild(favoritesListItem);
        })
    }
}

console.log(favorites)
