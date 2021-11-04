/*
  A simple script to change nav-btn color when scrolled past to main.
*/ 

// (function() {
//   let navBtn = document.querySelector(".nav-btn__inner");
//   let toggle = true;

//   document.addEventListener("scroll", () => {
//     //In the below if statement that = sign is very imp, because links do precise scrolling. when the sign is > the color will not change.
//     if(toggle && (window.scrollY >= document.documentElement.clientHeight)) { 
//       navBtn.classList.toggle("color-switch");
//       toggle = false;
//     }

//     if(!toggle && (window.scrollY < document.documentElement.clientHeight)) {
//       navBtn.classList.toggle("color-switch");
//       toggle = true;
//     }
//   })
// })();