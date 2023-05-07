var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      this.querySelector(".icon").innerHTML = "&#x002B;";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.querySelector(".icon").innerHTML = "&#x2212;";
    }
  });
}
// keep the first project expanded by default
// var collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach(function (collapsible) {
//   collapsible.click();
// });
document.querySelector(".collapsible").click();
document.querySelector("#testimonials .collapsible").click();

