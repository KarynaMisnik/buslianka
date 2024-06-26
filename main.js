function loadEnglish() {
  // Redirect to the English version (index.html)
  window.location.href = "/index.html";
}

function loadBelarusian() {
  // Redirect to the Belarusian version (index-by.html)
  window.location.href = "index-by.html";
}

/* Manipulates img logo in pages: replaces one image with another one on hover */
const img = document.getElementById("home-img");

img.addEventListener("mouseenter", function () {
  // Change the image source on hover
  this.src = "../../img/stork.png";
});

img.addEventListener("mouseleave", function () {
  // Change back to the original image source on mouse leave
  this.src = "../../img/nest.png";
});
