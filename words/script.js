let i = 0;
let count;
let words = [];

function startApp(book) {
  document.getElementById('book-list').setAttribute("style", "display: none;");
  document.getElementById('app').setAttribute("style", "display: block;");

  words = collections[book];

  document.getElementById('current-word').innerHTML = words[0];
}

function right() {
  words.shift();
  if (words.length === 0) {
    document.getElementById('current-word').innerHTML = "DONE";
  }
  else {
    document.getElementById('current-word').innerHTML = words[0];
  }
}

function wrong() {
  const wrongWord = words.shift();
  words.push(wrongWord);
  document.getElementById('current-word').innerHTML = words[0];
}
