const menu = document.querySelector ("#menu" );
let isOpen = false;

export function changeMenuView() {
    if(!isOpen) {
        menu.style.display = 'flex';
        isOpen = true;
        return;
    }
    menu.style.display = 'none';
    isOpen = false;
}
