const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector('.button-container');

function moveNoButton() {
  // Get container width/height
  const containerWidth = container.offsetWidth - noBtn.offsetWidth;
  const containerHeight = container.offsetHeight - noBtn.offsetHeight;

  const x = Math.random() * containerWidth;
  const y = Math.random() * containerHeight;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Move No button when mouse gets near it
noBtn.addEventListener("mouseenter", moveNoButton);

// Optional: alert if clicked
noBtn.addEventListener("click", () => {
  alert("No is feeling shy today 😅");
});

// Yes button click
yesBtn.addEventListener("click", () => {
  alert("Yay! 💖 Thank you!");
});
