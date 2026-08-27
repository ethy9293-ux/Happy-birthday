const images = [
  "kanshu-memory-1.png",
  "kanshu-memory-2.png",
  "kanshu-memory-3.png",
  "kanshu-memory-4.png",
  "kanshu-memory-5.png",
  "kanshu-memory-6.png"
];

let currentIndex = 0;

function updateVaultImage(index) {
  // 1. Target direct img tags if present
  const cubeImgTags = document.querySelectorAll('.cube .face img, .cube div img');
  if (cubeImgTags.length > 0) {
    cubeImgTags.forEach((img, idx) => {
      if (images[idx]) {
        img.src = images[idx];
      }
    });
  }

  // 2. Target CSS background images on cube faces
  const cubeFaces = document.querySelectorAll('.cube .face, .cube > div');
  if (cubeFaces.length > 0) {
    cubeFaces.forEach((face, idx) => {
      if (images[idx]) {
        face.style.backgroundImage = `url('${images[idx]}')`;
        face.style.backgroundSize = 'cover';
        face.style.backgroundPosition = 'center';
      }
    });
  }
}

// Event listeners for navigation buttons (◀️ / ▶️)
document.getElementById('prev-btn')?.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateVaultImage(currentIndex);
});

document.getElementById('next-btn')?.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateVaultImage(currentIndex);
});

// Initialize images on DOM load
document.addEventListener('DOMContentLoaded', () => {
  updateVaultImage(currentIndex);
});