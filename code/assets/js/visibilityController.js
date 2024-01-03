import { executeFunctionWithDelay } from "./utils.js";

const mainElement = document.querySelector("#main");
const footerElement = document.querySelector("#footer");
const loadingElement = document.querySelector("#loading");

// MAIN VISIBILITY SETTER
function setElementVisibility(element, alive, display) {
    if(alive) {
        element.style.display = display;
        return;
    }
    element.style.display = 'none';
}

// EXTENDS FROM MAIN SETTER
export function setMainVisibility(alive) {
    setElementVisibility(mainElement, alive, 'block');
}
export function setFooterVisibility(alive) {
    setElementVisibility(footerElement, alive, 'flex');
}
function setLoadingVisibility(alive) {
    setElementVisibility(loadingElement, alive, 'block');
}

// DISPOSE LOADING WITH FADE
export function disposeLoadingWithFade() {
    loadingElement.classList.add('fadeOut');
    executeFunctionWithDelay(setLoadingVisibility, 500, false);
}