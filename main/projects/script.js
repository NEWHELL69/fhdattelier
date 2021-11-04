(function () {
  //----- The code below helps with laoding more imgs in project section. It utilizes css .load-more-imgs class.

  let btn = document.querySelector(".projects__load-more-btn");
  let projects = document.querySelector(".projects");

  function loadMoreImgs() {
    projects.classList.toggle("load-more-imgs");

    if(btn.innerHTML == "Load More"){
      btn.innerHTML = "Load Less"
    } else {
      btn.innerHTML = "Load More";
    }
  }

  btn.addEventListener("click", () => {
    loadMoreImgs();
  });

  //----- The code below helps with making the projects pictures square.

  let pictures = document.querySelectorAll(".project .carousel-cell")

  function makePicturesSquare() {
      for(let picture of pictures) {
          picture.style.height = getComputedStyle(picture).width;
      };
  }

  makePicturesSquare();

  window.addEventListener("resize", () => {
  makePicturesSquare();
  });

  // ----- The code below changes main's z-index when carousel is in full-screen mode.

  let main = document.querySelector("main");
  let projectCarousels = document.querySelectorAll(".project-carousel");
  let flkty;

  for(let projectCarousel of projectCarousels) {
    flkty = new Flickity( projectCarousel, {
      fullscreen: true, 
      contain: true, 
      wrapAround: true, 
      pageDots: false
    });
    flkty.on( 'fullscreenChange', function( isFullscreen ) {
      main.classList.toggle("zIndex3");
    });
  }
})()