const clickBtn =
  document.getElementById("clickBtn");
const startScreen =
  document.getElementById("startScreen");
const content =
  document.getElementById("content");
/* =========================
   CLICK ME
========================= */
clickBtn.addEventListener("click", function () {
  // Click Me ကိုဖျောက်မယ်
  startScreen.style.display = "none";
  // ပုံနဲ့ I Love U ကိုပြမယ်
  content.style.display = "flex";
  // Bubble effect
  for (let i = 0; i < 30; i++) {
    setTimeout(function () {
      createBubble();
    }, i * 150);
  }
  // Heart effect
  for (let i = 0; i < 35; i++) {
    setTimeout(function () {
      createHeart();
    }, i * 120);
  }
});
/* =========================
   CREATE BUBBLE
========================= */
function createBubble() {
  const bubble =
    document.createElement("div");
  bubble.classList.add("bubble");
  const texts = [
    "I Love U ❤️",
    "Love You 💕",
    "I Miss You 🥺",
    "My Love ❤️",
    "Forever 💗",
    "You & Me 💕",
    "Love ❤️",
    "I Love U 💖"
  ];
  bubble.innerText =
    texts[
      Math.floor(
        Math.random() * texts.length
      )
    ];
  // Random left position
  bubble.style.left =
    Math.random() * 90 + 5 + "%";
  // Start from bottom
  bubble.style.bottom =
    Math.random() * 20 + "px";
  // Random size
  const size =
    0.7 + Math.random() * 0.7;
  bubble.style.transform =
    `scale(${size})`;
  document.body.appendChild(bubble);
  // Animation ပြီးရင်ဖျက်မယ်
  setTimeout(function () {
    bubble.remove();
  }, 3000);
}
/* =========================
   CREATE HEART
========================= */
function createHeart() {
  const heart =
    document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  // Random position
  heart.style.left =
    Math.random() * 100 + "%";
  heart.style.bottom =
    Math.random() * 30 + "px";
  // Random size
  heart.style.fontSize =
    (15 + Math.random() * 25) + "px";
  // Random speed
  heart.style.animationDuration =
    (2 + Math.random() * 2) + "s";
  document.body.appendChild(heart);
  setTimeout(function () {
    heart.remove();
  }, 4000);
}
