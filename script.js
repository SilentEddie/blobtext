//let text = ["Hello", "I", "am", "a", "beautiful", "animated", "text"];
let text = ["Goedemiddag", "en", "welkom", "bij", "de", "monthly", "van", "februari"];
const interval = 750;
const wait = 200;
const text1 = document.getElementById("blobText1");
const text2 = document.getElementById("blobText2");
const text3 = document.getElementById("blobText3");
const text4 = document.getElementById("blobText4");

const elementArray = [text1, text2, text3, text4];


start();

function start() {
  setTimeout(function() {
    toggleBlobby();
  }, interval/2);
  setTimeout(function() {
    toggleBlobby();
  }, interval*0.9);
  setTimeout(function() {
    placeAllWords();
  }, interval+interval*1.2);
}

function placeAllWords() {
  elementArray[1].classList.add("blobby");
  elementArray[3].classList.add("blobby");

  for (let i = 0; i < text.length; i++) {
    let word = text[i];
    let element = elementArray[i%2];
    let element2 = elementArray[i%2+2];
    setTimeout( function() {
      setWordToElement(word,element,element2)
    }, i*interval*2)
    
  }
}


function setWordToElement(word, ...elements) {
  elements.forEach(function(element) {
    element.innerText = word;
  });
  toggleBlobby();
}

function toggleBlobby() {
  elementArray.forEach(function(element) {
    element.classList.toggle("blobby")
  });
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
  }, interval*2+wait);
}

function animatedWord(word) {
  setNewWordOnBackground(word);
  blobbify();
  swapWordsBackGroundAndForeground();
  deblobbify();
}

function setNewWordOnBackground(word) {
  setTimeout(function() {
    console.log("setNewWordOnBackground");
    document.getElementById("blobText2").innerText = word;
  }, interval);
}

function setNewWordOnForeground(word) {

    console.log("setNewWordOnForeground");
    document.getElementById("blobText1").innerText = word;

}

function blobbify() {
  console.log("blobbify");
  document.getElementById("blobText-wrapper").classList.add("blobbified");
}

function swapWordsBackGroundAndForeground() {
  setTimeout(function() {
    console.log("swap");
    console.log(document.getElementById("blobText1").innerText)
    console.log(document.getElementById("blobText2").innerText)
    let temp = document.getElementById("blobText1").innerText;
    document.getElementById("blobText1").innerText = document.getElementById("blobText2").innerText;
    document.getElementById("blobText2").innerText = temp;
  }, interval);
}

function deblobbify() {
  setTimeout(function() {
    console.log("deblobbify");
    document.getElementById("blobText-wrapper").classList.remove("blobbified");
  }, interval);
}