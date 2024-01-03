const menu = document.querySelector("#menu");
// MENU ALWAYS START CLOSED
menu.style.display = "none";
// FALSE: closed
// TRUE: open
let isOpen = false;

// WHEN IS CALLED, SWITCH VISIBILITY
export function changeMenuVisibility() {
    // ALTER DISPLAY STYLE
    // isOpen === false: "flex"
    // isOpen === true: "none"
    let displayStyle = isOpen ? "none" : "flex";
    menu.style.display = displayStyle;
    // ALTER isOpen VARIABLE
    isOpen = !isOpen;
}
