import {affirmations, favorites} from '../data/data.js'

const affirmationContainer = document.querySelector('.affirmation-container');
const affirmationText = document.querySelector('.affirmation-text');
const newBtn = document.querySelector('.new-btn');
const shareBtn = document.querySelector('.share-btn');
const submitBtn = document.querySelector('.submit-btn');
const submitForm = document.querySelector('.submit-form');
const affirmationInput = document.querySelector('.affirmation-input');
const submitFormModal = document.querySelector('.submit-form-modal');
const close = document.querySelector('.close');
const formBtn = document.querySelector('.form-btn');
const saveBtn = document.querySelector('.save-btn');
const data = JSON.parse(localStorage.getItem('affirmations'))

// first load display(affirmations) on formBtn display(data) => favorites => home = first load


document.addEventListener("DOMContentLoaded", () => {
    if (!data) {
        displayAffirmation(affirmations);
    } else {
        displayAffirmation(data)
    }
})



function displayAffirmation (affirmationsList) {
    let i = Math.floor(Math.random() * affirmationsList.length);
    const affirmation = affirmationsList[i];
    affirmationText.textContent = affirmation;
    console.log(affirmationsList);
};


newBtn.addEventListener('click', () => {
    if (!data) {
        displayAffirmation(affirmations);
    } else {
        displayAffirmation(data)
    }
})



shareBtn.addEventListener("click", function () {
    const affirmation = encodeURIComponent(document.getElementById("affirmation-text").textContent);
    const subject = encodeURIComponent("Your Daily Affirmation");
    window.location.href = `mailto:?subject=${subject}&body=${affirmation}`;
});

//I would like the form content to reset after closing and reopening the modal
//I also want it to show if an affirmation is the same as one already in the array

function addAffirmation (e) {
    e.preventDefault();
            if (affirmationInput) {
                affirmations.push(affirmationInput.value)
                localStorage.setItem('affirmations', JSON.stringify(affirmations));
            } else {
                alert('Please enter your affirmation!')
            }
};

formBtn.addEventListener('click', function (e) {
    addAffirmation(e);
    submitFormModal.style.display = 'none';
    affirmationContainer.classList.remove('blur');
    const data = JSON.parse(localStorage.getItem('affirmations'));
    displayAffirmation(data);
});


close.addEventListener('click', function () {
    submitFormModal.style.display = 'none';
    affirmationContainer.classList.remove('blur');
});

submitBtn.addEventListener('click', function () {
    submitFormModal.style.display = 'flex';
    affirmationContainer.classList.add('blur');
});

function addFavorite () {
    const currentAffirmation = affirmationText.textContent
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(currentAffirmation)) {
        favorites.push(currentAffirmation);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        console.log("Saved to favorites:", currentAffirmation);
        console.log("Favorite Affirmations:", favorites);
    } else {
        console.log("quote is already in favorites");
    }}

saveBtn.addEventListener ('click', () => addFavorite())





