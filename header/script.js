(function() {
  //This is a simple hack to hide cursor after words are typed.
  let h1 = document.querySelector("h1");
  h1.addEventListener("animationend", () => {
    h1.classList.add("h1AfterHide");
  })
})()