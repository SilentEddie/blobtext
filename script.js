let text = ["Hello", "I", "am", "a", "beautiful", "animated", "text"];
const interval = 1800;

start();

function start() {
  animateText(text);
}

function animateText(text) {
  if (text.length == 0) return;
  let word = text.shift();
  setNewWordOnBackground(word);
  blobbify();
  swapWordsBackGroundAndForeground();
  deblobbify();
  setTimeout(function() {
    animateText(text);
  }, interval*2);
}

function animatedWord(word) {
  setNewWordOnBackground(word);
  blobbify();
  swapWordsBackGroundAndForeground();
  deblobbify();
}

function setNewWordOnBackground(word) {
  console.log("setNewWordOnBackground");
  document.getElementById("blobText2").innerText = word;
}

function blobbify() {
  console.log("blobbify");
  document.getElementById("blobText-wrapper").classList.add("blobbified");
}

function swapWordsBackGroundAndForeground() {
  setTimeout(function() {
    console.log("swap");
    let temp = document.getElementById("blobText1").innerText;
    document.getElementById("blobText1").innerText = document.getElementById("blobText2").innerText;
    document.getElementById("blobText2").innerText = temp;
  }, interval);
}

function deblobbify() {
  setTimeout(function() {
    console.log("deblobbify");
    document.getElementById("blobText-wrapper").classList.remove("blobbified");
  }, interval+20);
}