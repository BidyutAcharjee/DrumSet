var drumlenthBtn = document.querySelectorAll(".drum").length;

// Section for mouse click.....
for (var i = 0; i < drumlenthBtn; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// section for keyboard press
document.addEventListener("keypress", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});
// Section for joining sound in keypress and mouseclick (a switch statment)
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
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}

//  above audio statements is like same in below the Constructor function
// function HouseKeeper (name, age, location, job) {
//     this.name = name;
//     this.age = age;
//     this.location = location;
//     this.job = job;
//     this.clean = function () {
//         alert('cleaning is in process');
//     }
// }

// var houseKeeper2 = new HouseKeeper('panchanan', 57, 'midnapur', ['hall']);
// houseKeeper2.clean();

/* function Audio (fileLocation) {
    this.fileLocation = fileLocation;
    this.play = function() {
        Tap into the audio hardware
        Check the file at fileLocation exists
        Check the file at fileLocation is a sound file
        Play the file at fileLocation
    }
} */

// document.querySelectorAll("button")[0].addEventListener("click", function () {
//   alert("i goy clicked");
// });

// document.querySelectorAll("button")[0].addEventListener("click", () => {
//   alert("i goy clicked");
// });
// document.querySelectorAll("button")[1].addEventListener("click", () => {
//   alert("i goy clicked");
// });
// document.querySelectorAll("button")[2].addEventListener("click", () => {
//   alert("i goy clicked");
// });
// document.querySelectorAll("button")[3].addEventListener("click", () => {
//   alert("i goy clicked");
// });
// document.querySelectorAll("button")[4].addEventListener("click", () => {
//   alert("i goy clicked");
// });
// document.querySelectorAll("button")[5].addEventListener("click", () => {
//   alert("i goy clicked");
// });
// document.querySelectorAll("button")[6].addEventListener("click", () => {
//   alert("i goy clicked");
// });
