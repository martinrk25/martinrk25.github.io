const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const catGif = document.getElementById("catGif");

document.body.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();
  const btnX = rect.left + rect.width / 2;
  const btnY = rect.top + rect.height / 2;
  const dx = e.clientX - btnX;
  const dy = e.clientY - btnY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 120) {
    const angle = Math.atan2(dy, dx);
    const escapeDistance = 150;
    let newX = btnX - Math.cos(angle) * escapeDistance;
    let newY = btnY - Math.sin(angle) * escapeDistance;

    const maxLeft = window.innerWidth - rect.width - 20;
    const maxTop = window.innerHeight - rect.height - 20;

    newX = Math.min(maxLeft, Math.max(20, newX));
    newY = Math.min(maxTop, Math.max(20, newY));

    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
  }
});

yesBtn.addEventListener("click", () => {
  document.getElementById("buttons").style.display = "none";
  message.style.display = "block";
  catGif.style.display = "block";
});
