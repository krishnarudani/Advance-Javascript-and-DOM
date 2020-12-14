//detecting buttoon press

var numberOfdrumsButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfdrumsButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
var w = new Audio("sounds/tom-1m.mp3");
var a = new Audio("sounds/tom-2.mp3");
var d = new Audio("sounds/tom-3.mp3");
var s = new Audio("sounds/tom-4.mp3");
var j = new Audio("sounds/crash.mp3");
var k = new Audio("sounds/kick-bass.mp3");
var l = new Audio("sounds/snare.mp3");

//detecting keybord press

document.addEventListener("keypress", function (event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      w.currentTime = 0;
      w.play();
      break;

    case "a":
      a.play();
      break;

    case "d":
      d.play();
      break;

    case "s":
      s.play();
      break;

    case "j":
      j.play();
      break;

    case "k":
      k.play();
      break;

    case "l":
      l.play();
      break;

    default:
      console.log("buttonInnerHTML");
  }
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");
  var timeOut = currentkey.duration;
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 50);
}
