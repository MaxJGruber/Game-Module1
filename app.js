const arrayOfNotes = ["first-note", "second-note", "third-note", "fourth-note"];

const numNotes = 4;
const notes = [];

for (let i = 0; i < numNotes; i++) {
  let note = document.createElement("div");
  note.classList.add("note");
  note.classList.add(
    `${arrayOfNotes[Math.floor(Math.random() * arrayOfNotes.length)]}`
  );
  console.log(note);

  notes.push(note);
  console.log(document.getElementById("notes_area"));
  document.getElementById("notes_area").appendChild(note);
  //   document.getElementById("notes_area").appendChild(note);
}

// Keyframes
notes.forEach((element) => {
  element.animate({ transform: "translateY(calc(45vw - 50px))" });
});
