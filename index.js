const dropdown = document.querySelector('.dropdown-container');
const menu = document.querySelector('.menu');

menu.addEventListener('click', (event) => {
    event.preventDefault();
    dropdown.classList.toggle('open-menu');
})
dropdown.addEventListener('click', (event) => {
    event.preventDefault();
    dropdown.classList.toggle('open-menu');
});