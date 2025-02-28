import { affirmationText } from "../index.js";

export function displayAffirmation(affirmationsList) {
  let i = Math.floor(Math.random() * affirmationsList.length);
  const affirmation = affirmationsList[i];
  affirmationText.textContent = affirmation;
}







  

    