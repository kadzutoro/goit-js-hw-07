
const inputElement = document.querySelector("input")
const buttonCreate = document.querySelector("button[data-create]")
const buttonDestroy = document.querySelector("button[data-destroy]")
const boxes = document.querySelector("#boxes")

buttonCreate.addEventListener('click', () => {
  boxes.innerHTML = '';

const amount = inputElement.value;
if (amount <= 100) {
  createBoxes(amount)
}
inputElement.value = ''
});

buttonDestroy.addEventListener('click', () => {
  boxes.innerHTML = "";
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let value = 30;
  let boxesHTML = ""
  for (let i = 0; i < amount; i++) {
  boxesHTML += `<div style="width: ${value}px; height: ${value}px; background-color: ${getRandomHexColor()}"></div>`;
  value += 10;
  }

  boxes.innerHTML = boxesHTML;
}