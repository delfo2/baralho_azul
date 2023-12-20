const bkg = document.querySelector("#bkg");
function disableDisplay() {
    bkg.style.display = "none";
}
function changeWindow() {
    window.location.href = "./app/app.html";
}

setTimeout(disableDisplay, "2300");
setTimeout(changeWindow, "3000");