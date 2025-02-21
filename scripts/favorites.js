import { favorites } from "../data/data.js";

const favoritesText = document.querySelector('.favorites-text')
const favoritesList = document.querySelector('.favorites-list')

// export function displayFavorites () {
//     let favorites = JSON.parse(localStorage.getItem('favorites'));
//     if (favorites.length === 0) {
//         favoritesList.innerHTML = '<p>No favorites yet!</p>';
//     } else {
//         favorites.forEach (affirmation => {
//             let favoritesListItem = document.createElement('li');
//             favoritesListItem.textContent = affirmation;
//             favoritesList.appendChild(favoritesListItem);
//         })
//     }
// }

function deleteFavorite (index) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favoriteAffirmations));
}

function reloadFavorites () {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>No favorites yet!</p>';
    } else {
        favorites.forEach (affirmation => {
            let favoritesListItem = document.createElement('li');
            favoritesListItem.textContent = affirmation;
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = '&times;';
            deleteBtn.onclick = () => deleteFavorite(index);

            favoritesListItem.appendChild(deleteBtn);
            favoritesList.appendChild(favoritesListItem);
        })
    }
}

reloadFavorites();

