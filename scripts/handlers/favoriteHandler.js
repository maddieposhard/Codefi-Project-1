import { affirmationText, modal} from "../index.js";
import { displayModal } from "./modalHandler.js";
import { closeHandler } from "./closeHandler.js";

export function addFavorite() {
    const currentAffirmation = affirmationText.textContent;
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(currentAffirmation)) {
      favorites.push(currentAffirmation);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      modal.innerHTML += displayModal();
      modal.removeAttribute("hidden" && "style");
      
      
      const savedModal = document.querySelector(".savedModal");
      savedModal.removeAttribute('hidden');
  
      // dehjbfjdgsfuyedbf
      const close = document.querySelector('.close');
      close.addEventListener("click", closeHandler);
  
    } else {
      modal.innerHTML += displayModal();
      modal.removeAttribute('hidden' && 'style');
        
      const favoritesModal = document.querySelector(".favoritesModal")
      favoritesModal.removeAttribute('hidden')
  
      const close = document.querySelector(".close");
      close.addEventListener("click", closeHandler);
    }
  }