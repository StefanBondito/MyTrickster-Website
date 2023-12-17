const toggleButton = document.getElementById('toggle_button');
const navList = document.getElementById('navbar-menu');

toggleButton.addEventListener('click', () =>{
    navList.classList.toggle('active2');
})