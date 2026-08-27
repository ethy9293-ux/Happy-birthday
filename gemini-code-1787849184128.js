// Image Array matching your uploaded .png files in the root directory
const images = [
  "kanshu-memory-1.png",
  "kanshu-memory-2.png",
  "kanshu-memory-3.png",
  "kanshu-memory-4.png",
  "kanshu-memory-5.png",
  "kanshu-memory-6.png"
];

let currentIndex = 0;

// Function to update the cube faces or display image
function updateVaultImage(index) {
  const cubeFaces = document.querySelectorAll('.cube .face img');
  
  if (cubeFaces.length > 0) {
    cubeFaces.forEach((img, idx) => {
      if (images[idx]) {
        img.src = images[idx];
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

// Initialize images on load
document.addEventListener('DOMContentLoaded', () => {
  updateVaultImage(currentIndex);
});