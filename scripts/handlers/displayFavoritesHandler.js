import { deleteFavorite } from "./deleteFavoriteHandler.js";
const favoritesList = document.querySelector('.favorites-list')

export function displayFavorites () {
    favoritesList.innerHTML = '';
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>No favorites yet!</p>';
    } else {
        favorites.forEach ((affirmation, index) => {
            let favoritesListItem = document.createElement('li');
            let deleteBtn = document.createElement('button');
            favoritesListItem.textContent = affirmation;
            deleteBtn.textContent = 'x';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => {
                deleteFavorite(index);
            });
            favoritesListItem.appendChild(deleteBtn);
            favoritesList.appendChild(favoritesListItem);
        })
    }
}