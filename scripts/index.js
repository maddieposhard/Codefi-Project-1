import { affirmations, favorites } from "../data/data.js";
import { closeHandler } from "./handlers/closeHandler.js";
import { shareHandler } from "./handlers/shareHandler.js";
import { addFavorite } from "./handlers/favoriteHandler.js";
import { removeHandler } from "./handlers/submitHandler.js";
import { displayAffirmation } from "./handlers/displayHandler.js";

let submitBtn = document.querySelector(".submit-btn");
const newBtn = document.querySelector(".new-btn");
const shareBtn = document.querySelector(".share-btn");
const submitForm = document.querySelector(".submit-form");
const saveBtn = document.querySelector(".save-btn");

export const affirmationText = document.querySelector(".affirmation-text");
export const modalContainer = document.querySelector('.modal-container');
export const affirmationContainer = document.querySelector(".affirmation-container");
export const modal = document.querySelector(".modal");
export const data = JSON.parse(localStorage.getItem("affirmations"));

// first load display(affirmations) on formBtn display(data) => favorites => home = first load

document.addEventListener("DOMContentLoaded", () => {
  !data? displayAffirmation(affirmations) : displayAffirmation(data)})

newBtn.addEventListener("click", () => {
 !data? displayAffirmation(affirmations) : displayAffirmation(data)});

shareBtn.addEventListener("click", shareHandler);

submitBtn.addEventListener("click", removeHandler);

saveBtn.addEventListener("click", addFavorite);

