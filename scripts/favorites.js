import { favorites } from "../data/data.js";

const favoritesText = document.querySelector('.favorites-text')
const favoritesList = document.querySelector('.favorites-list')

function displayFavorites () {
    favoritesList.innerHTML = '';
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>No favorites yet!</p>';
    } else {
        favorites.forEach ((affirmation, index) => {
            let favoritesListItem = document.createElement('li');
            favoritesListItem.textContent = affirmation;
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'x';

            deleteBtn.addEventListener('click', () => {
                deleteFavorite(index);
            });

            favoritesListItem.appendChild(deleteBtn);
            favoritesList.appendChild(favoritesListItem);
        })
    }
}

function deleteFavorite(index) {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (index >=0 && index < favorites.length) {
        favorites.splice(index, 1); 
        localStorage.setItem('favorites', JSON.stringify(favorites)); 
        displayFavorites(); 
}}

displayFavorites();

// use method indexOf on click, or event.closest method
//pointer event closest method