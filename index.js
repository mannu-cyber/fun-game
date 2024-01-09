function yesBtn() {
  let image = document.getElementById("image");
  image.src = "oh.gif";
  let title = document.querySelector(".title");
  title.innerHTML = "Let's go!!!!!";
  let btn = document.querySelector("button, #noBtn");

  btn.style.display = 'none'
}

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
  // Select the element with id "noBtn"
  const b = document.querySelector("#noBtn");

  // Check if the element is found
  if (b) {
    // Add a mouseover event listener
    b.addEventListener("mouseover", moveHover);

    // Function to move the element randomly
    function moveHover() {
      // Generate random values for left and top positions
      const i = Math.floor(Math.random() * 500) + 1;
      const j = Math.floor(Math.random() * 500) + 1;
     
      

      // Set the left and top styles of the element
      b.style.left = i + "px";
      b.style.top = j + "px";
     
    }
  } else {
    console.error("Element with id 'noBtn' not found.");
  }
});

