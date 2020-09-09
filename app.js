// FRET-BOARD ELEMENTS COORDINATES

let elem1 = document.querySelector(".first-btn");
let rect1 = elem1.getBoundingClientRect();
// let note = document.querySelector(".first-note");
// let noteRect = note.getBoundingClientRect();
// console.log(noteRect);
console.log(rect1);
let elem2 = document.querySelector(".second-btn");
let rect2 = elem2.getBoundingClientRect();
console.log(rect2);
let elem3 = document.querySelector(".third-btn");
let rect3 = elem3.getBoundingClientRect();
console.log(rect3);
let elem4 = document.querySelector(".fourth-btn");
let rect4 = elem4.getBoundingClientRect();
console.log(rect4);

// CREATING RANDOM NOTE (this random note is then assigned to its specific string)
// STRING ORDER : GREEN / ORANGE / RED / BLUE

const arrayOfNotes = [
  ["first-note", "first-cord", "one"],
  ["second-note", "second-cord", "two"],
  ["third-note", "third-cord", "three"],
  ["fourth-note", "fourth-cord", "four"],
];

function randomNote() {
  let note = document.createElement("div");
  note.classList.add("note");
  const classesToAdd =
    arrayOfNotes[Math.floor(Math.random() * arrayOfNotes.length)];

  note.classList.add(
    `${classesToAdd[0]}`,
    `${classesToAdd[1]}`,
    `${classesToAdd[2]}`
  );

  const chosenParent = document.getElementById(`${classesToAdd[2]}`);
  chosenParent.appendChild(note);
  // if (chosenParent) {
  removeElement();
  // } //if statement to determine whether note exists?
}

// START BUTTON
//Main focus of today

function startSong() {
  setInterval(randomNote, 1000);
}

// ANIMATION END (so that notes disappear and don't go back to position 0)

function removeElement() {
  const animated = document.querySelectorAll(".note");
  animated.forEach((element) =>
    element.addEventListener("animationend", () => {
      element.parentNode.removeChild(element);
    })
  );
}

// SCORE SET TO ZERO

let score = 0;

// CLICKHANDLER (Interaction of button click; outcome determined by timing (checking coordinates of
// note element compared to fret-board element coordinates)

function checkingCoordinates(targetClass, targetRect) {
  let stringNote = document.querySelector(targetClass);
  if (stringNote) {
    let stringRect = stringNote.getBoundingClientRect();
    if (
      stringRect.y < targetRect.y + 20 &&
      stringRect.y > targetRect.y - 20 &&
      stringRect.x === targetRect.x &&
      stringRect.x === targetRect.x
    ) {
      score += 10;
      console.log("NOTE Y", stringRect.y);
      console.log("BUTTON Y", targetRect.y);
      console.log("BUTTON Y+20", targetRect.y + 20);
      console.log("RESULT", targetClass.y, targetRect.y);
      console.log("RESULT", targetClass.x, targetRect.x);
    }
  }
}

function hitButton() {
  checkingCoordinates(".first-note", rect1);
  checkingCoordinates(".second-note", rect2);
  checkingCoordinates(".third-note", rect3);
  checkingCoordinates(".fourth-note", rect4);

  // SCORE
  let scoreview = document.getElementById("score-view");
  scoreview.innerHTML = `${score}`;
}

// INTERACTIONS / EVENT LISTENERS

// document.addEventListener("keydown", (event) => {
//   switch (event.key) {
//     case "a":
//       hitButton();
//       break;
//     case "s":
//       hitButton();
//       break;
//     case "d":
//       hitButton();
//       break;
//     case "f":
//       hitButton();
//       break;
//   }
// });

document.querySelector(".first-btn").addEventListener("click", hitButton);
document.querySelector(".second-btn").addEventListener("click", hitButton);
document.querySelector(".third-btn").addEventListener("click", hitButton);
document.querySelector(".fourth-btn").addEventListener("click", hitButton);

// startSong();
// MUSIC SELECTION

const firstAudioTrack = new Audio("./songs/bensound-goinghigher.mp3");
const secondAudioTrack = new Audio("./songs/bensound-happyrock.mp3");
const thirdAudioTrack = new Audio("./songs/bensound-highoctane.mp3");
const fourthAudioTrack = new Audio("./songs/bensound-punky.mp3");
const fifthAudioTrack = new Audio("./songs/bensound-rumble.mp3");

const playlist = [
  firstAudioTrack,
  secondAudioTrack,
  thirdAudioTrack,
  fourthAudioTrack,
  fifthAudioTrack,
];
