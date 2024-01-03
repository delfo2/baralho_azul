// IMPORTS
import { changeMenuVisibility } from "./menuHandler.js";
import { goToSuccessPage } from "./formHandler.js";
import {
    disposeLoadingWithFade,
    setFooterVisibility,
    setMainVisibility,
} from "./visibilityController.js";
import { executeFunctionWithDelay } from "./utils.js";

// BUTTON & FORM VARIABLES
const menuBtn = document.querySelector("#menuBtn");
const form = document.querySelector("#reservation__form");

// FUNCTION TO SHOW CONTENT WITH DELAY
function showContent() {
    disposeLoadingWithFade();
    executeFunctionWithDelay(setMainVisibility, 500, true);
    executeFunctionWithDelay(setFooterVisibility, 500, true);
}

// SETTING INITIAL VISIBILITY
setMainVisibility(false);
setFooterVisibility(false);

// WAITING DOM LOAD TO LOAD AND THEN SHOW CONTENT
document.addEventListener("DOMContentLoaded", () => executeFunctionWithDelay(showContent, 3000));

// BUTTON & FORM LISTENER
menuBtn.addEventListener("click", changeMenuVisibility);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    goToSuccessPage();
});
