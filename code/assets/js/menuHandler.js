const menu = document.querySelector ("#menu" );
let isOpen = menu.style.display === 'flex';

export function changeMenuView() {
    isOpen = menu.style.display !== 'none';
    if(!isOpen) {
        menu.style.display = 'flex';
        return;
    }
    menu.style.display = 'none';
}
