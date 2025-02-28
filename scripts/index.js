import { affirmations, favorites } from "../data/data.js";
import { shareHandler } from "./handlers/shareHandler.js";
import { addFavorite } from "./handlers/favoriteHandler.js";
import { removeHandler } from "./handlers/removeHandler.js";
import { displayAffirmation } from "./handlers/displayIndexHandler.js";

let submitBtn = document.querySelector(".submit-btn");
const newBtn = document.querySelector(".new-btn");
const shareBtn = document.querySelector(".share-btn");
const saveBtn = document.querySelector(".save-btn");

export const affirmationText = document.querySelector(".affirmation-text");
export const modalContainer = document.querySelector('.modal-container');
export const affirmationContainer = document.querySelector(".affirmation-container");
export const modal = document.querySelector(".modal");
export const data = JSON.parse(localStorage.getItem("affirmations"));


// Displays data or affirmations on first page load
document.addEventListener("DOMContentLoaded", () => {
  !data? displayAffirmation(affirmations) : displayAffirmation(data)})

// New affirmation button displays a new affirmation from the data array when pressed, or the affirmations array if there is no data
newBtn.addEventListener("click", () => {
 !data? displayAffirmation(affirmations) : displayAffirmation(data)});

shareBtn.addEventListener("click", shareHandler);

submitBtn.addEventListener("click", removeHandler);

saveBtn.addEventListener("click", addFavorite);

