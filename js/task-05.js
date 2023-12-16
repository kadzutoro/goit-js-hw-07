function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonColor = document.querySelector(".change-color")
const spanColor = document.querySelector(".color")

buttonColor.addEventListener("click", () =>{
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = document.body.style.backgroundColor;
})

