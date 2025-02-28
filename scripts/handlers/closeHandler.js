import { affirmationContainer, modalContainer } from "../index.js";

export function closeHandler() {
    modalContainer.style.display = 'none';
    affirmationContainer.classList.remove("blur");
  }