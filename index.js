const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach((btn) =>
  btn.addEventListener("click", function () {
    var clickedButton = this.innerHTML;
    makeSound(clickedButton);
    buttonAnimation(clickedButton);
  })
);

document.addEventListener("keydown", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var tomj = new Audio("sounds/snare.mp3");
      tomj.play();
      break;
    case "k":
      var tomk = new Audio("sounds/crash.mp3");
      tomk.play();
      break;
    case "l":
      var toml = new Audio("sounds/kick-bass.mp3");
      toml.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
