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

function displayAffirmation () {
    let i = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[i];
    affirmationText.textContent = affirmation;
    console.log(affirmation);
};

displayAffirmation();
newBtn.addEventListener('click', displayAffirmation);


shareBtn.addEventListener("click", function () {
    const affirmation = encodeURIComponent(document.getElementById("affirmation-text").textContent);
    const subject = encodeURIComponent("Your Daily Affirmation");
    window.location.href = `mailto:?subject=${subject}&body=${affirmation}`;
});



function addAffirmation (e) {
    e.preventDefault();
    console.log(affirmationInput.value)
            if (affirmationInput) {
                affirmations.push(affirmationInput.value)
            } else {
                alert('Please enter your affirmation!')
            }
    console.log(affirmationInput.value);
    console.log(affirmations);
};

formBtn.addEventListener('click', addAffirmation);

close.addEventListener('click', function () {
    submitFormModal.style.display = 'none';
    affirmationContainer.classList.remove('blur');
});

submitBtn.onclick = function () {
    submitFormModal.style.display = 'flex';
    affirmationContainer.classList.add('blur');
};

function addFavorite () {
    const currentAffirmation = affirmationText.textContent
    let favoriteAffirmations = JSON.parse(localStorage.getItem('favorites'))
    if (!favoriteAffirmations.includes(currentAffirmation)) {
        favoriteAffirmations.push(currentAffirmation);
        localStorage.setItem('favorites', JSON.stringify(favoriteAffirmations));
        console.log("Saved to favorites:", currentAffirmation);
        console.log("Favorite Affirmations:", favorites);
    } else {
        console.log("quote is already in favorites");
    }}

saveBtn.addEventListener ('click', addFavorite)

