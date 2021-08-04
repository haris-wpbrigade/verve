const ToggleBtn = document.querySelector('.toggleBtn')
const NavMenu = document.querySelector('.nav-menu')

ToggleBtn.addEventListener('click', () => {
    NavMenu.classList.toggle('active')
})

const BackGroundIMG = document.querySelector('.content-body')

const setBackIMG = (imgsrc) => {
    // console.log(imgsrc)
    BackGroundIMG.style.backgroundImage = `url(../img/${imgsrc})`;
}

const resetBackIMG = (imgsrc) => {
    // console.log(imgsrc)
    BackGroundIMG.style.backgroundImage = `url(../img/${imgsrc})`;
}