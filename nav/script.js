(function () {
  let navBtn = document.querySelector(".nav-btn__inner");
  let navBtnToggles = document.querySelectorAll(".nav-btn__toggle");
  let navBar = document.querySelector(".nav-bar");
  let navBarLis = document.querySelectorAll(".nav-bar__inner li");

  function toggle() {
    navBtn.classList.toggle("open");
    navBar.classList.toggle("show");

    //animation
    animationToggle();

    //focus
    //implementation pending
  }

  function animationToggle() {
    //I can toggle fadeInUp on ul elements and recive the same effects but I have already set transform property on ul to center it on page. 
    //So the transform style of fadeInUp class interferes with ul.
    for(let navBarLi of navBarLis) {
      navBarLi.classList.toggle("fadeInUp");
    }
  }

  function disableKeyboardFocus() {
    //Implementation pending
  }

  function enableKeyboardFocus() {
    //Implementation pending
  }

  for(let navBtnToggle of navBtnToggles) {
    navBtnToggle.addEventListener("click", () => {
      toggle();
    })
  }

  navBtn.addEventListener("keydown", (event) => {
    if(event.code == "Space" || event.code == "NumpadEnter" || event.code == "Enter") {
      toggle();
    }
  })
})();

(function () {
/*
  A simple script to change logo color when scrolled past to main.
*/ 

let logo = document.querySelector(".nav .nav-logo");
let toggle = true;

document.addEventListener("scroll", () => {
  //In the below if statement that = sign is very imp, because links do precise scrolling. when the sign is > the color will not change.
  if(toggle && (window.scrollY >= document.documentElement.clientHeight)) { 
    logo.classList.toggle("color-switch");
    toggle = false;
  }

  if(!toggle && (window.scrollY < document.documentElement.clientHeight)) {
    logo.classList.toggle("color-switch");
    toggle = true;
  }
})
})()
