import { modal, affirmationContainer, modalContainer} from "../index.js";
import { displayModal } from "./modalHandler.js";
import { data } from "../index.js";
import { displayAffirmation } from "./displayHandler.js";

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

  export function removeHandler() {
    modal.removeAttribute("style" && "hidden");
    modal.innerHTML = displayModal()
    const modalForm = document.querySelector(".modal-form")
    modalForm.removeAttribute('hidden')
  
    const close = document.querySelector(".close");
    close.addEventListener("click", function () {
      modalContainer.style.display = 'none';
      affirmationContainer.classList.remove("blur");
    })
    affirmationContainer.classList.add("blur");

let formBtn = document.querySelector(".form-btn");

formBtn.addEventListener("click", function (e) {
addAffirmation(e);
modalContainer.style.display += "none";
affirmationContainer.classList.remove("blur");
const data = JSON.parse(localStorage.getItem("affirmations"));
displayAffirmation(data);
})};