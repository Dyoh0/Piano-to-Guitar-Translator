function play(url) {
  const aud = new Audio(url);
  aud.play();
}

const tabcopy = $("#tabs0").clone();
var count = 0;
var G6, G5, G4, G3, G2, G1;
var octave = "C3";

function reset() {
  G6 = document.getElementById("G6" + count);
  G5 = document.getElementById("G5" + count);
  G4 = document.getElementById("G4" + count);
  G3 = document.getElementById("G3" + count);
  G2 = document.getElementById("G2" + count);
  G1 = document.getElementById("G1" + count);
}

function addboard() {
  count++;
  let tabsid = "tabs" + count;
  tabcopy.clone().appendTo("#container");
  $("#container").contents().last().attr("id", tabsid);
  let childnodes = document.getElementById(tabsid).childNodes;
  for (x of childnodes) {
    if (x.nodeName == "SPAN") {
      x.id = x.id.substr(0, 2) + count;
    }
  }
}

function output(pianote) {
  reset();
  G6 = document.getElementById("G6" + count);

  if (screen.width < 490) limit = 29;
  else if (screen.width < 600) limit = 40;
  else if (screen.width < 700) limit = 45;
  else if (screen.width < 800) limit = 55;
  else if (screen.width < 900) limit = 65;
  else if (screen.width < 1100) limit = 70;
  else if (screen.width < 1400) limit = 80;
  else if (screen.width < 1700) limit = 95;
  else if (screen.width < 1800) limit = 105;
  else limit = 125;
  if (G6.innerText.length >= limit) {
    addboard();
    reset();
    G6 = document.getElementById("G6" + count);
  }
  document.getElementById("pianoinput").innerText = pianote;
  const guitarnote = translate(pianote);
  if (!guitarnote) {
    switch (pianote) {
      case "C":
        document.getElementById("guitaroutput").innerText = "Nope.";
        break;
      case "C#":
        document.getElementById("guitaroutput").innerText = "Nu-uh.";
        break;
      case "D":
        document.getElementById("guitaroutput").innerText = "Try again!";
        break;
      case "D#":
        document.getElementById("guitaroutput").innerText = "I wonder if guitars can have notes below E...";
        break;
    }
  } else document.getElementById("guitaroutput").innerText = guitarnote;
}

function translate(pianote) {
  let output, note, fret;
  if (octave == "C2") {
    var result = oct2(pianote);
  } else if (octave == "C3") {
    var result = oct3(pianote);
  } else if (octave == "C4") {
    var result = oct4(pianote);
  }
  note = result.note;
  fret = result.fret;
  addnote(note, fret);
  output = note + fret;
  return output;
}

function oct2(pianote) {
  let note, fret;
  switch (pianote) {
    case "C":
    case "C#":
    case "D":
    case "D#":
      alert("This doesn't actually have an equivalent");
      break;
    case "E":
      note = "e";
      fret = 0;
      break;
    case "F":
      note = "e";
      fret = 1;
      break;
    case "G":
      note = "e";
      fret = 3;
      break;
    case "A":
      note = "A";
      fret = 0;
      break;
    case "B":
      note = "A";
      fret = 2;
      break;
    case "F#":
      note = "e";
      fret = 2;
      break;
    case "G#":
      note = "e";
      fret = 4;
      break;
    case "A#":
      note = "A";
      fret = 1;
      break;
  }
  return { note, fret };
}
function oct3(pianote) {
  let note, fret;
  switch (pianote) {
    case "C":
      note = "A";
      fret = 3;
      break;
    case "D":
      note = "D";
      fret = 0;
      break;
    case "E":
      note = "D";
      fret = 2;
      break;
    case "F":
      note = "D";
      fret = 3;
      break;
    case "G":
      note = "D";
      fret = 5;
      break;
    case "A":
      note = "G";
      fret = 2;
      break;
    case "B":
      note = "G";
      fret = 4;
      break;
    case "C#":
      note = "A";
      fret = 4;
      break;
    case "D#":
      note = "D";
      fret = 1;
      break;
    case "F#":
      note = "D";
      fret = 4;
      break;
    case "G#":
      note = "G";
      fret = 1;
      break;
    case "A#":
      note = "G";
      fret = 3;
      break;
  }
  return { note, fret };
}
function oct4(pianote) {
  let note, fret;
  switch (pianote) {
    case "C":
      note = "B";
      fret = 1;
      break;
    case "D":
      note = "B";
      fret = 3;
      break;
    case "E":
      note = "E";
      fret = 0;
      break;
    case "F":
      note = "E";
      fret = 1;
      break;
    case "G":
      note = "E";
      fret = 3;
      break;
    case "A":
      note = "E";
      fret = 5;
      break;
    case "B":
      note = "E";
      fret = 7;
      break;
    case "C#":
      note = "B";
      fret = 2;
      break;
    case "D#":
      note = "B";
      fret = 4;
      break;
    case "F#":
      note = "E";
      fret = 2;
      break;
    case "G#":
      note = "E";
      fret = 4;
      break;
    case "A#":
      note = "E";
      fret = 6;
      break;
  }
  return { note, fret };
}

function addnote(exclude, fret) {
  const s = "---";
  switch (exclude) {
    case "E":
      G6.innerText += fret + "--";
      G5.innerText += s;
      G4.innerText += s;
      G3.innerText += s;
      G2.innerText += s;
      G1.innerText += s;
      break;
    case "B":
      G6.innerText += s;
      G5.innerText += fret + "--";
      G4.innerText += s;
      G3.innerText += s;
      G2.innerText += s;
      G1.innerText += s;
      break;
    case "G":
      G6.innerText += s;
      G5.innerText += s;
      G4.innerText += fret + "--";
      G3.innerText += s;
      G2.innerText += s;
      G1.innerText += s;
      break;
    case "D":
      G6.innerText += s;
      G5.innerText += s;
      G4.innerText += s;
      G3.innerText += fret + "--";
      G2.innerText += s;
      G1.innerText += s;
      break;
    case "A":
      G6.innerText += s;
      G5.innerText += s;
      G4.innerText += s;
      G3.innerText += s;
      G2.innerText += fret + "--";
      G1.innerText += s;
      break;
    case "e":
      G6.innerText += s;
      G5.innerText += s;
      G4.innerText += s;
      G3.innerText += s;
      G2.innerText += s;
      G1.innerText += fret + "--";
      break;
  }
}

function changeoctave() {
  octave = $("#octave").val();
}

function undo() {
  if (document.getElementById("G6" + count).innerText == "E| --") {
    alert("That sure is a bad idea, my guy.");
  } else {
    reset();
    G6.innerText = G6.innerText.slice(0, -3);
    G5.innerText = G5.innerText.slice(0, -3);
    G4.innerText = G4.innerText.slice(0, -3);
    G3.innerText = G3.innerText.slice(0, -3);
    G2.innerText = G2.innerText.slice(0, -3);
    G1.innerText = G1.innerText.slice(0, -3);
  }
}

function tabdel() {
  if (count == 0) alert("Okay but why would you want to do that tho");
  else {
    $("#container").contents().last().remove();
    count--;
  }
}
