const arrayOfNotes = ["first-note", "second-note", "third-note", "fourth-note"];
const arrayOfCords = ["first-cord", "second-cord", "third-cord", "fourth-cord"];
const arrayOfStrings = ["one", "two", "three", "four"];

function randomNote() {
  let note = document.createElement("div");
  note.classList.add("note");
  note.classList.add(
    `${arrayOfNotes[Math.floor(Math.random() * arrayOfNotes.length)]}`
  );
  note.classList.add(
    `${arrayOfCords[Math.floor(Math.random() * arrayOfCords.length)]}`
  );
  const chosenParent = document.querySelectorAll(".violin-string")[
    Math.floor(
      Math.random() * document.querySelectorAll(".violin-string").length
    )
  ];
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
