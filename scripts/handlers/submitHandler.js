import { data } from "../index.js";

export function addAffirmation(e) {
    e.preventDefault();
    const affirmationInput = document.querySelector(".affirmation-input");
    if (!affirmationInput.value <= 0) {
      if (data) {
        data.push(affirmationInput.value);
        localStorage.setItem("affirmations", JSON.stringify(data));
      } else {
        affirmations.push(affirmationInput.value);
        localStorage.setItem("affirmations", JSON.stringify(affirmations));
      }
    } else {
      alert("Please enter your affirmation!");
    } 
    data? console.log('these are all the affirmations:', data) : console.log('these are all the affirmations:', affirmations);
  }

