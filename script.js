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

// Checking if the collapsible reached to the center of the screen
function isInCenter(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // Check if the element is in the center of the page
    return (
        rect.top <= windowHeight / 2 &&
        rect.bottom >= windowHeight / 2 &&
        rect.left <= windowWidth / 2 &&
        rect.right >= windowWidth / 2
    );
}

window.addEventListener('scroll', function() {
    // Get all elements with the specified class name
    const elements = document.querySelectorAll('.collapsible');

    // Loop over all elements
    for (const element of elements) {
        // Check if the element has the 'active' class and if the element is in the viewport
        if (!element.classList.contains('active') && isInCenter(element)) {
            // The element is visible, do something
            console.log('An element is in center!, ', element);
            // The element doesn't have the 'active' class, add it
            element.click()
        }
    }
});
