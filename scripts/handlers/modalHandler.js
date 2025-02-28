import { modalContainer } from "../index.js";

export function displayModal() {
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