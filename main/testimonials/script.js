(function() {
  let testimonialsInnerIframes = document.querySelectorAll(".testimonials__inner iframe");

  function iframeResize() {
    for(let testimonialsInnerIframe of testimonialsInnerIframes) {
      testimonialsInnerIframe.style.height = getComputedStyle(testimonialsInnerIframe).width;
    }
  }

  iframeResize();

  window.addEventListener("resize", () => {
    iframeResize();
  });

  let testimonialsInnerImgs = document.querySelectorAll(".testimonials__inner picture");

  function imgResize() {
    for(let testimonialsInnerImg of testimonialsInnerImgs) {
      testimonialsInnerImg.style.height = getComputedStyle(testimonialsInnerImg).width;
    }
  }

  imgResize();

  window.addEventListener("resize", () => {
    imgResize();
  });

  let testimonialBlocks = document.querySelectorAll(".testimonial-block");
  let imgVideoBlock = document.querySelector(".testimonials .img-video-container .img-video-block");

  for(let testimonialBlock of testimonialBlocks) {
    testimonialBlock.addEventListener("mouseenter", (event) => {
      if(imgVideoBlock.querySelector("picture").innerHTML != event.currentTarget.querySelector("picture").innerHTML) {
        imgVideoBlock.querySelector("picture").innerHTML = event.currentTarget.querySelector("picture").innerHTML;
        imgVideoBlock.querySelector("iframe").setAttribute("src", event.currentTarget.querySelector("iframe").getAttribute("src"));
      }
    });

    testimonialBlock.addEventListener("click", (event) => {
      if(imgVideoBlock.querySelector("picture").innerHTML != event.currentTarget.querySelector("picture").innerHTML) {
        imgVideoBlock.querySelector("picture").innerHTML = event.currentTarget.querySelector("picture").innerHTML;
        imgVideoBlock.querySelector("iframe").setAttribute("src", event.currentTarget.querySelector("iframe").getAttribute("src"));
      }
    });
  };
})()