import { affirmationText } from "../index.js";

export function shareHandler() {
    const affirmation = encodeURIComponent(
      affirmationText.textContent
    );
    const subject = encodeURIComponent("Your Daily Affirmation");
    window.location.href = `mailto:?subject=${subject}&body=${affirmation}`;
  }