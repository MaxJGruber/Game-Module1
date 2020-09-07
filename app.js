const arrayOfNotes = [
  ["first-note", "first-cord", "one"],
  ["second-note", "second-cord", "two"],
  ["third-note", "third-cord", "three"],
  ["fourth-note", "fourth-cord", "four"],
];
// const arrayOfCords = ["first-cord", "second-cord", "third-cord", "fourth-cord"];
const arrayOfStrings = ["one", "two", "three", "four"];

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
let intervalId = 0;

function startSong() {
  setInterval(randomNote, 1000);
}

// ANIMATION END
function removeElement() {
  const animated = document.querySelectorAll(".note");
  console.log(animated);
  animated.forEach((element) =>
    element.addEventListener("animationend", () => {
      element.parentElement.removeChild(element);
      console.log("Animation ended");
    })
  );
}

// FINDING ELEMENTS

let elem1 = document.querySelector(".first-btn");
let rect1 = elem1.getBoundingClientRect();
let elem2 = document.querySelector(".second-btn");
let rect2 = elem2.getBoundingClientRect();
let elem3 = document.querySelector(".third-btn");
let rect3 = elem3.getBoundingClientRect();
let elem4 = document.querySelector(".fourth-btn");
let rect4 = elem4.getBoundingClientRect();

console.log(typeof rect1, rect2, rect3, rect4);
let score = 0;
function hitButton() {
  let firstStringNote = document.querySelector(".first-note");
  let firstStringRect = firstStringNote.getBoundingClientRect();
  let secondStringNote = document.querySelector(".second-note");
  let secondStringRect = secondStringNote.getBoundingClientRect();
  let thirdStringNote = document.querySelector(".third-note");
  let thirdStringRect = thirdStringNote.getBoundingClientRect();
  let fourthStringNote = document.querySelector(".fourth-note");
  let fourthStringRect = fourthStringNote.getBoundingClientRect();

  if (firstStringRect == rect1) {
    score += 10;
    console.log("YOU HIT");
  }
  if (secondStringRect == rect2) {
    score += 10;
    console.log("YOU HIT");
  }
  if (thirdStringRect == rect3) {
    score += 10;
    console.log("YOU HIT");
  }
  if (fourthStringRect == rect4) {
    score += 10;
    console.log("YOU HIT");
  }
}

rect1.addEventListener("keydown", hitButton);
rect2.addEventListener("keydown", hitButton);
rect3.addEventListener("keydown", hitButton);
rect4.addEventListener("keydown", hitButton);

// INTERACTION

// startSong();
