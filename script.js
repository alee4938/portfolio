let lastScrollY = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY && window.scrollY > 50) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollY = window.scrollY;
});

const images = [
  "media/maya_room1.jpg",
  "media/maya_room2.jpg",
  "media/maya_room3.jpg"
];

let currentIndex = 0;

const switcher = document.querySelector(".image-switcher");
const imgEl = document.getElementById("projectImage");

if (switcher && imgEl) {
  switcher.addEventListener("mousemove", (e) => {
    const rect = switcher.getBoundingClientRect();
    const x = e.clientX - rect.left;

    switcher.classList.remove("hover-left", "hover-right");

    if (x < rect.width / 2) {
      switcher.classList.add("hover-left");
    } else {
      switcher.classList.add("hover-right");
    }
  });

  switcher.addEventListener("mouseleave", () => {
    switcher.classList.remove("hover-left", "hover-right");
  });

  switcher.addEventListener("click", (e) => {
    const rect = switcher.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if (x < rect.width / 2) {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
      currentIndex = (currentIndex + 1) % images.length;
    }

    imgEl.style.opacity = 0;
    setTimeout(() => {
      imgEl.src = images[currentIndex];
      imgEl.style.opacity = 1;
    }, 150);
  });
}
