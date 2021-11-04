(function(){
  let loadingPage = document.querySelector(".loading-page");
  // let delayTo = Date.now() + 3000;
  // let currentTime;

  function toggleLoadingPage() {
    loadingPage.classList.toggle("hideAnimation");
    loadingPage.addEventListener("animationend", () => {
      loadingPage.classList.toggle("removeFromDom");
    });
  }

  setTimeout(toggleLoadingPage, 3000);

  // window.addEventListener("load", () => {
  //   currentTime = Date.now();
  //   if(currentTime < delayTo) {
  //     setTimeout(toggleLoadingPage, delayTo - currentTime)
  //   } else {
  //     toggleLoadingPage(); 
  //   }
  // });
})();