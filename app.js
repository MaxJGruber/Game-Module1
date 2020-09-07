const arrayOfNotes = ["first-note", "second-note", "third-note", "fourth-note"];
const arrayOfCords = ["first-cord", "second-cord", "third-cord", "fourth-cord"];
const arrayOfStrings = ["one", "two", "three", "four"];
// function assignRandomNotes() {
//   const numNotes = 4;
//   const notes = [];

//   for (let i = 0; i < numNotes; i++) {
//     let note = document.createElement("div");
//     note.classList.add("note");
//     note.classList.add(
//       `${arrayOfNotes[Math.floor(Math.random() * arrayOfNotes.length)]}`
//     );
//     note.classList.add(
//       `${arrayOfCords[Math.floor(Math.random() * arrayOfCords.length)]}`
//     );

//     notes.push(note);
//     console.log(document.getElementById("notes_area"));
//     document.getElementById("notes_area").appendChild(note);
//   }

//   // Keyframes
//   notes.forEach((element) => {
//     element.animate({ transform: "translateY(calc(45vw - 50px))" });
//   });
// }

// assignRandomNotes();

function randomNote() {
  let note = document.createElement("div");
  note.classList.add("note");
  note.classList.add(
    `${arrayOfNotes[Math.floor(Math.random() * arrayOfNotes.length)]}`
  );
  note.classList.add(
    `${arrayOfCords[Math.floor(Math.random() * arrayOfCords.length)]}`
  );
  console.log(note);
  console.log(
    Math.floor(
      Math.random() * document.querySelectorAll(".violin-string").length
    )
  );
  const chosenParent = document.querySelectorAll(".violin-string")[
    Math.floor(
      Math.random() * document.querySelectorAll(".violin-string").length
    )
  ];
  console.log(chosenParent);
  chosenParent.appendChild(note);
}

randomNote();
