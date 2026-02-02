const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Move No button anywhere on the screen
function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Trigger movement when mouse hovers
noBtn.addEventListener("mouseenter", moveNoButton);

// Optional: alert if clicked
noBtn.addEventListener("click", () => {
  alert("No is feeling shy today 😅");
});

// Yes button redirects to pandas page
yesBtn.addEventListener("click", () => {
  window.location.href = "pandas.html";
});
