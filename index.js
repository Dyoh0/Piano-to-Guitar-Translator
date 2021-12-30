function play(url) {
  console.log(url);
  const aud = new Audio(url);
  aud.play();
}

const tabcopy = $("#tabs0").clone();
var count = 0;
var G6, G5, G4, G3, G2, G1;

function reset() {
  G6 = document.getElementById("G6" + count);
  G5 = document.getElementById("G5" + count);
  G4 = document.getElementById("G4" + count);
  G3 = document.getElementById("G3" + count);
  G2 = document.getElementById("G2" + count);
  G1 = document.getElementById("G1" + count);
}

function t() {
  count++;
  let tabsid = "tabs" + count;
  console.log("count:", count);
  tabcopy.clone().appendTo("#container");
  $("#container").contents().last().attr("id", tabsid);
  console.log("tabsid:", tabsid);
  let childnodes = document.getElementById(tabsid).childNodes;
  console.log(childnodes);
  for (x of childnodes) {
    console.log("idnodename", x.id, x.nodeName);
    if (x.nodeName == "SPAN") {
      x.id = x.id.substr(0, 2) + count;
    }
  }
}

function output(pianote) {
  reset();
  console.log("G6:", G6);
  G6 = document.getElementById("G6" + count);
  if (G6.innerText.length >= 127) {
    t();
  } else {
    document.getElementById("pianoinput").innerText = pianote;
    const guitarnote = translate(pianote);
    document.getElementById("guitaroutput").innerText = guitarnote;
  }
}

function translate(pianote) {
  let output, note, fret;
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
      note = "B";
      fret = 5;
      break;
    case "F":
      note = "B";
      fret = 6;
      break;
    case "G":
      note = "G";
      fret = 0;
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
      note = "G";
      fret = 1;
      break;
    case "A#":
      note = "G";
      fret = 3;
      break;
  }
  addnote(note, fret);
  output = note + fret;
  return output;
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
    // case "C":
    //   break;
    // case "D":
    //   break;
    // case "F":
    //   break;
    // case "A":
    //   break;
    // case "B":
    //   break;
  }
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
