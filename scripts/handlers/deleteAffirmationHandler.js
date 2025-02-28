import { displayAll } from "./displayAllHandler.js";

export function deleteAffirmation(index) {
    let data = JSON.parse(localStorage.getItem('affirmations')) || [];
    if (index >=0 && index < data.length) {
        data.splice(index, 1); 
        localStorage.setItem('affirmations', JSON.stringify(data)); 
        displayAll(); 
}}
