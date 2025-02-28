const affirmationContainer = document.querySelector('.affirmations-container');
import { deleteAffirmation } from "./deleteAffirmationHandler.js";

export function displayAll() {
    let data = JSON.parse(localStorage.getItem('affirmations'))
    affirmationContainer.innerHTML= '';
    if (!data) {
        affirmationContainer.innerHTML = "<p>No affirmations available.</p>";
    } else {
    const list = document.createElement("ul");
    data.forEach((affirmation, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = affirmation;
        let eraseBtn = document.createElement('button');
        eraseBtn.textContent = 'x';
        eraseBtn.classList.add = ('erase-btn');
        eraseBtn.addEventListener('click', () => {
            deleteAffirmation(index);
        });
        listItem.appendChild(eraseBtn);
        list.appendChild(listItem);
    });
    affirmationContainer.appendChild(list);
}}