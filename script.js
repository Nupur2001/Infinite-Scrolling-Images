let container = document.querySelector(".container");
const URL = "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=";

function getRandomNum() {
  return Math.floor(Math.random() * 1000);
}

function loadImages(numImg = 12) {
  for (let i = 0; i < numImg; i++) {
    let img = document.createElement("img");
    img.src = `${URL}${getRandomNum()}&timestamp=${Date.now()}`;
    container.appendChild(img);
  }
}

// Initial Load
loadImages();

let isLoading = false;
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
    !isLoading
  ) {
    isLoading = true;
    setTimeout(() => {
      loadImages();
      isLoading = false;
    }, 500);
  }
});