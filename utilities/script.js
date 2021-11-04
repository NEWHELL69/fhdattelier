// parallax code
(function() {
  let parallaxs = document.querySelectorAll(".parallax");

  window.addEventListener("scroll", () => {
    for(let parallax of parallaxs) {  
      let parallaxBoundingClientRect = parallax.getBoundingClientRect();

      //Checking if parallax element is inside window.
      if(parallaxBoundingClientRect.y + parallaxBoundingClientRect.height > 0) {

        //Here we are calculating y coord of parallax element when it is vertically centered on window(window relative).
        let YWhenParallaxCenterOnWindow = (document.documentElement.clientHeight - parallaxBoundingClientRect.height)/2;

        //This is a constant. Here we are calculating scrolled out height when parallax element is vertically centered on screen(document relative).
        let scrolledOutHeightWhenParallaxCenterOnWindow = (parallaxBoundingClientRect.top + window.pageYOffset) - YWhenParallaxCenterOnWindow;

        if(YWhenParallaxCenterOnWindow > parallax.getBoundingClientRect().y) {

          //offset value is based on window.scrollY. When the transform is applied offset is not zero, because we scrolled to reach the element. 
          //Because it is not zero there is jerk in motion. That's why we are subtracting here.
          let offset = window.scrollY - scrolledOutHeightWhenParallaxCenterOnWindow;

          parallax.style.transform = `translate(0, ${offset * 0.15}px)`;

        }
      }
    }
  })
})();

//A simple horizontal scroll btn(prev, next) utility
//Right now you can only use this utility once.
//Use class "horizontal-scroll" on element to scroll. 
//Use classes "horizontal-scroll__prev-btn", "horizontal-scroll__next-btn" on next and prev btns.

// (function() {
//   let scrollElement = document.querySelector(".horizontal-scroll");
//   let scrollElementWidth = scrollElement.scrollWidth;
//   let scrollElementChildrenCount = document.querySelectorAll(".horizontal-scroll > *").length;
//   let scrollAmount = scrollElementWidth/scrollElementChildrenCount;
//   let scrollNextBtn = document.querySelector(".horizontal-scroll__next-btn");
//   let scrollPrevBtn = document.querySelector(".horizontal-scroll__prev-btn");
//   let bool = true;

//   window.addEventListener("resize", () => {
//     scrollElementWidth = scrollElement.scrollWidth;
//     scrollAmount = scrollElementWidth/scrollElementChildrenCount;
//   })

//   scrollNextBtn.addEventListener("click", () => {
//     if(bool) {
//       scrollElement.scrollLeft = scrollElement.scrollLeft + scrollAmount;
//       bool = false;
//       setTimeout(() => {
//         //This and below timeouts help with disabling btns when scroll is in effect.
//         bool = true;
//       }, 500)
//     }
//   });

//   scrollPrevBtn.addEventListener("click", () => {
//     if(bool) {
//       scrollElement.scrollLeft = scrollElement.scrollLeft - scrollAmount;
//       bool = false;
//       setTimeout(() => {
//         bool = true;
//       }, 500)
//     }  
//   });
// })();