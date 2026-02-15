onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  window.addEventListener("load", () => {
  setTimeout(() => {
    const val = document.getElementById("valentine");
    val.style.opacity = "1";
    val.style.pointerEvents = "auto";
  }, 4000);
});

document.addEventListener("DOMContentLoaded", () => {

  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });

  yesBtn.addEventListener("click", () => {
    document.getElementById("valentine").style.opacity = "0";
    document.getElementById("valentine").style.pointerEvents = "none";

    setTimeout(() => {
      document.getElementById("letter").style.opacity = "1";
    }, 800);
  });

});
