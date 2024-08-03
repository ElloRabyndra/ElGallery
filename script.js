const gallery = document.getElementById("gallery");
const overlay = document.querySelector(".overlay");
const overlayImg = document.querySelector(".overlay img");

gallery.addEventListener("click", function (event) {
  if (event.target.tagName == "IMG") {
    const currentImg = event.target.src;
    overlayImg.setAttribute("src", currentImg);
    overlay.style.display = "flex";
  }
});

overlay.addEventListener("click", function (event) {
  if (!(event.target.tagName == "IMG")) {
    overlay.style.display = "none";
  }
});
