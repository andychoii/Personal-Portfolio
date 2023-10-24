// Get the button element
const getStartedButton = document.getElementById('get-started-button');

// Check if the button element exists
if (getStartedButton) {
  // Add a click event listener to the button
  getStartedButton.addEventListener('click', () => {
    // Redirect the user to the new page
    window.location.href = 'home-page.html';
  });
} else {
  console.error('Button element not found');
}
