import { affirmations, favorites } from "../data/data.js";

const modalContainer = document.querySelector('.modal-container');
const affirmationContainer = document.querySelector(".affirmation-container");
const affirmationText = document.querySelector(".affirmation-text");
const newBtn = document.querySelector(".new-btn");
const shareBtn = document.querySelector(".share-btn");
let submitBtn = document.querySelector(".submit-btn");
const submitForm = document.querySelector(".submit-form");
const modal = document.querySelector(".modal");
const saveBtn = document.querySelector(".save-btn");
export const data = JSON.parse(localStorage.getItem("affirmations"));

// first load display(affirmations) on formBtn display(data) => favorites => home = first load

document.addEventListener("DOMContentLoaded", () => {
  if (!data) {
    displayAffirmation(affirmations);
  } else {
    displayAffirmation(data);
  }
});

function displayAffirmation(affirmationsList) {
  let i = Math.floor(Math.random() * affirmationsList.length);
  const affirmation = affirmationsList[i];
  affirmationText.textContent = affirmation;
//   console.log(affirmationsList);
}

newBtn.addEventListener("click", () => {
  if (!data) {
    displayAffirmation(affirmations);
  } else {
    displayAffirmation(data);
  }
});

shareBtn.addEventListener("click", function () {
  const affirmation = encodeURIComponent(
    document.getElementById("affirmation-text").textContent
  );
  const subject = encodeURIComponent("Your Daily Affirmation");
  window.location.href = `mailto:?subject=${subject}&body=${affirmation}`;
});

//I would like the form content to reset after closing and reopening the modal
//I want it to show if an affirmation is the same as one already in the array

function addAffirmation(e) {
  e.preventDefault();
  const affirmationInput = document.querySelector(".affirmation-input");
  if (affirmationInput) {
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
  console.log(data);
}


submitBtn.addEventListener("click", function () {
  modal.removeAttribute("style");
  modal.removeAttribute("hidden")
  modal.innerHTML = displayModal()
  const modalForm = document.querySelector(".modal-form")
  modalForm.removeAttribute('hidden')

  const close = document.querySelector(".close");
  close.addEventListener("click", function () {
    console.log("close");
    modalContainer.style.display = 'none';
    affirmationContainer.classList.remove("blur");
  });

  affirmationContainer.classList.add("blur");
  let formBtn = document.querySelector(".form-btn");
  formBtn.addEventListener("click", function (e) {
  addAffirmation(e);
  modalContainer.style.display += "none";
  affirmationContainer.classList.remove("blur");
  const data = JSON.parse(localStorage.getItem("affirmations"));
  displayAffirmation(data);
  });
});



function addFavorite() {
  const currentAffirmation = affirmationText.textContent;
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(currentAffirmation)) {
    favorites.push(currentAffirmation);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    modal.innerHTML += displayModal();
    modal.removeAttribute("hidden");
    modal.removeAttribute("style");
    const savedModal = document.querySelector(".savedModal");
    savedModal.removeAttribute('hidden');
    const close = document.querySelector('.close');
    close.addEventListener("click", function () {
        console.log("close");
        modalContainer.style.display = 'none';
        affirmationContainer.classList.remove("blur");
      });
    console.log("Favorite Affirmations:", favorites);
  } else {
    modal.innerHTML += displayModal();
    modal.removeAttribute("hidden");
    modal.removeAttribute("style");
    const favoritesModal = document.querySelector(".favoritesModal")
    favoritesModal.removeAttribute('hidden')
    const close = document.querySelector(".close");
    close.addEventListener("click", function () {
      console.log("close");
      modalContainer.style.display = 'none';
      affirmationContainer.classList.remove("blur");
    });
  }
}

saveBtn.addEventListener("click", () => addFavorite());

function displayModal() {
  
    const modalHTML =`
    <div class="modal-content">
        <span class="close">&times;</span>
        <form class="modal-form" class="submit-form" hidden>
            <input type="text" class="affirmation-input" placeholder="Type here!">
            <button class="form-btn" type="button">Submit</button>
        </form>
        <p class="favoritesModal" hidden>Affirmation is already in favorites</p>
        <p class="savedModal" hidden>Saved to favorites</p>
    </div>`;
    modalContainer.innerHTML = modalHTML;
    modalContainer.removeAttribute('style')
    return modalHTML}