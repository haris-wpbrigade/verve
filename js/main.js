const ToggleBtn = document.querySelector('.toggleBtn')
const NavMenu = document.querySelector('.nav-menu')

ToggleBtn.addEventListener('click', () => {
    NavMenu.classList.toggle('active')
})