// Get the button element
const getStartedButton = document.getElementById("get-started-button");

// Check if the button element exists
if (getStartedButton) {
  // Add a click event listener to the button
  getStartedButton.addEventListener("click", () => {
    // Redirect the user to the new page
    window.location.href = "home-page.html";
  });
} else {
  console.error("Button element not found");
}

function toggleMenu() {
  // Get the menu links element
  const menu = document.querySelector(".menu-links");
  // Get the hambuger icon element
  const icon = document.querySelector(".hamburger-icon");
  // Toggle the "open" class on the menu links element
  menu.classList.toggle("open");
  // Toggle the "open" class on the hamburger icon element
  icon.classList.toggle("open");
}