import { modal, affirmationContainer, modalContainer } from "../index.js";
import { displayModal } from "./modalHandler.js";
import { addAffirmation } from "./submitHandler.js";
import { displayAffirmation } from "./displayIndexHandler.js";

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