window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const blocks = document.querySelectorAll(".block-container div");
  const visual = document.querySelector(".center-container");
  const colors = [
    "#a800ff",
    "#0079ff",
    "#00f11d",
    "#ffef00",
    "#ff7f00",
    "#ff0900"
  ];

  blocks.forEach((block, index) => {
    block.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubbles(index);
    });
  });

  const createBubbles = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 0.8s ease";
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
