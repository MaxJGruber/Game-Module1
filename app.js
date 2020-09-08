// CREATING RANDOM NOTE

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
  removeElement();
}

function startSong() {
  setInterval(randomNote, 1000);
}

// ANIMATION END
function removeElement() {
  const animated = document.querySelectorAll(".note");
  animated.forEach((element) =>
    element.addEventListener("animationend", () => {
      element.parentNode.removeChild(element);
    })
  );
}

// FINDING ELEMENTS

let elem1 = document.querySelector(".first-btn");
let rect1 = elem1.getBoundingClientRect();
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

// SCORE SET TO ZERO

let score = 0;

// CLICKHANDLER

function checkingCoordinates() {
  let firstStringNote = document.querySelector(".first-note");
  if (firstStringNote) {
    let firstStringRect = firstStringNote.getBoundingClientRect();
    if (firstStringRect.x < rect1.x + 10 && firstStringRect.x > rect1.x - 10) {
      score += 10;
    }
  }
  let secondStringNote = document.querySelector(".second-note");
  if (secondStringNote) {
    let secondStringRect = secondStringNote.getBoundingClientRect();
    if (
      secondStringRect.x < rect2.x + 10 &&
      secondStringRect.x > rect2.x - 10
    ) {
      score += 10;
      console.log(secondStringRect);
    }
  }
  let thirdStringNote = document.querySelector(".third-note");
  if (thirdStringNote) {
    let thirdStringRect = thirdStringNote.getBoundingClientRect();
    if (thirdStringRect.x < rect3.x + 10 && thirdStringRect.x > rect3.x - 10) {
      score += 10;
      console.log(thirdStringRect);
    }
  }
  let fourthStringNote = document.querySelector(".fourth-note");
  if (fourthStringNote) {
    let fourthStringRect = fourthStringNote.getBoundingClientRect();
    if (
      fourthStringRect.x < rect4.x + 10 &&
      fourthStringRect.x > rect4.x - 10
    ) {
      score += 10;
      console.log(fourthStringRect);
    }
  }

  // SCORE
  let scoreview = document.getElementById("score-view");
  scoreview.innerHTML = `${score}`;
}

// INTERACTIONS / EVENT LISTENERS

document
  .querySelector(".first-btn")
  .addEventListener("click", checkingCoordinates);
document
  .querySelector(".second-btn")
  .addEventListener("click", checkingCoordinates);
document
  .querySelector(".third-btn")
  .addEventListener("click", checkingCoordinates);
document
  .querySelector(".fourth-btn")
  .addEventListener("click", checkingCoordinates);
// startSong();

// MUSIC SELECTION

const firstAudioTrack = new Audio("./songs/bensound-goinghigher.mp3");
const secondAudioTrack = new Audio("./songs/bensound-happyrock.mp3");
const thirdAudioTrack = new Audio("./songs/bensound-highoctane.mp3");
const fourthAudioTrack = new Audio("./songs/bensound-punky.mp3");
const fifthAudioTrack = new Audio("./songs/bensound-rumble.mp3");
