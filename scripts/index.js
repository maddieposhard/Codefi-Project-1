console.log('connected')
import {affirmations} from '../data/data.js'

const affirmationContainer = document.querySelector('.affirmation-container');
const affirmationText = document.querySelector('.affirmation-text');
const newBtn = document.querySelector('.new-btn');
const shareBtn = document.querySelector('.share-btn');

function displayAffirmation () {
    let index = Math.floor(Math.random() * affirmations.length);
    const affirmation = affirmations[index];
    affirmationText.textContent = affirmation;
}

displayAffirmation();
newBtn.addEventListener('click', displayAffirmation);

shareBtn.addEventListener("click", function () {
    const affirmation = encodeURIComponent(document.getElementById("affirmation-text").textContent);
    const subject = encodeURIComponent("Your Daily Affirmation");
    window.location.href = `mailto:?subject=${subject}&body=${affirmation}`;
});


