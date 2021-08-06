/* ===========
 ToggleMenu function
=========== */
const ToggleBtn = document.querySelector(".toggleBtn");
const NavMenu = document.querySelector(".nav-menu");
const Overlay = document.querySelector(".overlay");

ToggleBtn.addEventListener("click", () => {
  NavMenu.classList.toggle("active");
  ToggleBtn.classList.toggle("active");
  Overlay.classList.toggle("active");
  //when menuActive the scroll disable otherwise able
  document.body.style.overflow =
    document.body.style.overflow === "hidden" ? "hidden scroll" : "hidden";
});

Overlay.addEventListener("click", () => {
  NavMenu.classList.remove("active");
  ToggleBtn.classList.remove("active");
  Overlay.classList.remove("active");
  document.body.style.overflow = "hidden scroll";
});

/* ===========
 onhover Content Changed
=========== */
const BackVideo = document.getElementById("myVideo");
const PlayBackVideo = (Videosrc) => {
  // in mobile view video disable
  if (window.matchMedia("(max-width: 767px)").matches) {
    console.log("Video is Stopped in MobMod");
    BackVideo.pause();
    BackVideo.removeAttribute("src"); // empty source
    BackVideo.load();
  } else {
    BackVideo.src = `img/${Videosrc}`;
    BackVideo.style.visibility = "visible";
    BackVideo.style.opacity = "1";
    BackVideo.play();
  }
};

const BackGroundIMG = document.querySelector(".content-body");
const setBackIMG = (imgsrc) => {
  // in mobile view background Image change disable
  if (window.matchMedia("(max-width: 767px)").matches) {
    console.log("Background Image changing is Stopped in MobMod");
  } else {
    BackVideo.style.visibility = "hidden";
    BackVideo.style.opacity = "0";
    BackVideo.pause();
    BackVideo.removeAttribute("src"); // empty source
    BackVideo.load();
    BackGroundIMG.style.backgroundImage = `url(img/${imgsrc})`;
  }
};

/* ===========
 full screen the window
=========== */
const FillScreen = document.getElementById("FullScreenWindow");

FillScreen.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
