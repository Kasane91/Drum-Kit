const drumButton = document.querySelectorAll(".drum");
const audio = new Audio("sounds/tom-1.mp3");

for (let i = 0; i < drumButton.length; i++) {
  drumButton[i].addEventListener("click", function () {
    let buttonInnerHTML = this.textContent;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

const makeSound = (key) => {
  switch (key) {
    case "w":
      let audio = new Audio("/sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      let audio1 = new Audio("/sounds/kick-bass.mp3");
      audio1.play();
      break;
    case "s":
      let audio2 = new Audio("sounds/snare.mp3");
      audio2.play();
      break;
    case "d":
      let audio3 = new Audio("/sounds/tom-1.mp3");
      audio3.play();
      break;
    case "j":
      let audio4 = new Audio("/sounds/tom-2.mp3");
      audio4.play();
      break;
    case "k":
      let audio5 = new Audio("/sounds/tom-3.mp3");
      audio5.play();
      break;
    case "l":
      let audio6 = new Audio("/sounds/tom-4.mp3");
      audio6.play();
      break;

    default:
      break;
  }
};

document.addEventListener("keydown", (e) => {
  makeSound(e.key);
  buttonAnimation(e.key);
});

let buttonAnimation = (key) => {
  let button = document.querySelector(`.${key}`);
  button.classList.toggle("pressed");
  setTimeout(() => {
    button.classList.toggle("pressed");
  }, 100);
};
