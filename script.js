let container = document.querySelector(".container");
const URL = "https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Felix";

function getRandomNum() {
  return Math.floor(Math.random() * 1000);
}

function loadImages(numImg = 12) {
  let i = 0;
  while (i < numImg) {
    let img = document.createElement("img");
    img.src = `${URL}${getRandomNum()}`;
    container.appendChild(img);
    i++;
  }
}
loadImages();

window.addEventListener("scroll", () => {
  // console.log(window.scrollY)
  while (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImages();
  }
});
