import { changeMenuView } from "./menuHandler.js";
import { goToSuccessPage } from "./formHandler.js";
const menuBtn = document.querySelector("#menuBtn");
const form = document.querySelector("#goToForm");

menuBtn.addEventListener("click", changeMenuView);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    goToSuccessPage();
});
