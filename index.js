document.addEventListener('keydown', function(event) {
  playAudio(pickAudioString(event.key));
  buttonAnimation(event.key);
});


document.querySelectorAll(".drum").forEach(function(currentBtn) {
  currentBtn.addEventListener('click', handleClick)
})

function handleClick() {
  playAudio(pickAudioString(this.innerHTML));
  buttonAnimation(this.innerHTML);
}

function pickAudioString(tag) {
  switch (tag) {
    case "w":
      return "sounds/tom-1.mp3"
      break;

    case "a":
      return "sounds/tom-2.mp3"
      break;

    case "s":
      return "sounds/tom-3.mp3"
      break;

    case "d":
      return "sounds/tom-4.mp3"
      break;

    case "j":
      return "sounds/snare.mp3"
      break;

    case "k":
      return "sounds/crash.mp3"
      break;

    case "l":
      return "sounds/kick-bass.mp3"
      break;

    default:
      return "";
      console.log(tag);

  }
}

function playAudio(file) {
  // document.getElementById("audiotag1").play();
  var audio = new Audio(file);
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeElement = document.querySelector("." + currentKey);
  activeElement.classList.add("pressed");
  setTimeout(function() {
    activeElement.classList.remove("pressed");
  }, 100);
}
