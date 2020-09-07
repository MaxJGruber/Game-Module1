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
  // console.log(note);
  // console.log(
  //   Math.floor(
  //     Math.random() * document.querySelectorAll(".violin-string").length
  //   )
  // );
  const chosenParent = document.querySelectorAll(".violin-string")[
    Math.floor(
      Math.random() * document.querySelectorAll(".violin-string").length
    )
  ];
  console.log(chosenParent);
  chosenParent.appendChild(note);
}
let intervalId = 0;

function startSong() {
  setInterval(randomNote, 1000);
  intervalId++;
  clearInterval(10);
}
// setInterval(randomNote, 1000);
// startSong();
// randomNote();
