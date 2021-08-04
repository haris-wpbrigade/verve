const ToggleBtn = document.querySelector('.toggleBtn')
const NavMenu = document.querySelector('.nav-menu')

ToggleBtn.addEventListener('click', () => {
    NavMenu.classList.toggle('active')
    ToggleBtn.classList.toggle('active')
})

const BackGroundIMG = document.querySelector('.content-body')

const setBackIMG = (imgsrc) => {
    // console.log(imgsrc)
    BackGroundIMG.style.backgroundImage = `url(../img/${imgsrc})`;
}

// full screen the window
const FillScreen = document.getElementById('FullScreenWindow')

FillScreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }  
})