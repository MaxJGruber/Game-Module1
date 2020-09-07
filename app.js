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
  console.log(classesToAdd);

  note.classList.add(
    `${classesToAdd[0]}`,
    `${classesToAdd[1]}`,
    `${classesToAdd[2]}`
  );

  const chosenParent = document.getElementById(`${classesToAdd[2]}`);
  console.log(">>>>>>>", chosenParent);
  chosenParent.appendChild(note);
  removeElement();
}
let intervalId = 0;

function startSong() {
  setInterval(randomNote, 1000);
}
// setInterval(randomNote, 1000);
// randomNote();

// ANIMATION END
function removeElement() {
  const animated = document.querySelectorAll(".note");
  console.log(animated);
  animated.forEach((element) =>
    element.addEventListener("animationend", () => {
      element.parentNode.removeChild(element);
      console.log("Animation ended");
    })
  );
}
// startSong();
