(() => {
  // variable stack here -> the elements you want to interact with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
  lightBox = document.querySelector(".lightbox"),
  houseVideo = lightBox.querySelector("video"),
  closeButton = lightBox.querySelector(".close-button");

  // functions go in the middle -> what do we want our app to do?
  function showLightBox() {
    // show the lightbox on a click
    lightBox.classList.add("show-lightbox");

    // play the lightbox video when it opens
    houseVideo.play();
  }

  function hidelightBox() {
    lightBox.classList.remove("show-lightbox");
  }

  // event handling for our sigilButtons
  sigilButtons.forEach(button => button.addEventListener("click", showLightBox));

  // add some event handling for the lightbox
  closeButton.addEventListener("click", hidelightBox);
})();
