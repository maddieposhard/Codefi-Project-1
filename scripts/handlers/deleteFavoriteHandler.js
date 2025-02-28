import { displayFavorites } from "./displayFavoritesHandler.js";

export function deleteFavorite(index) {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (index >=0 && index < favorites.length) {
        favorites.splice(index, 1); 
        localStorage.setItem('favorites', JSON.stringify(favorites)); 
        displayFavorites(); 
}}