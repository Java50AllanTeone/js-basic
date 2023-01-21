//references to DOM elements
const guessInputElement = document.querySelector(".guess-input");
const guessLettersElement = document.querySelector(".guess-letters");
let lettersDivs;
const trialsElement = document.querySelector(".trials-remained");
const gameResultElement = document.querySelector(".game-result");
const playAgainElement = document.querySelector(".play-again");
//varibales required for JS logic
const wordsForGuess = ["pappy", "apple", "table", "gold", "silver", "index",
 "script", "peace", "picture"];
 let trials; 
 let word;
 let flGameOver = false;
 let trialWord;
 //functions

 function startGame() {
    guessInputElement.value = '';
     word = getWord();
     fillLettersDivs();
     flGameOver = false;
     trials = word.length + 1;
     playAgainElement.style.display = "none";
     gameResultElement.innerHTML = "";
     trialsElement.innerHTML = `remained trials ${trials}`;
 }

 function getWord() {
    const index = Math.trunc(Math.random() * wordsForGuess.length);
    return wordsForGuess[index];
 }

 function fillLettersDivs() {
    const arrayWord = Array.from(word);
    guessLettersElement.innerHTML = arrayWord.reduce(function (res, cur) {
        res = res + '<div class="letter"></div>'
        return res;
    },'');
    lettersDivs = document.querySelectorAll(".letter");
 }

 function onChange() {

    if(flGameOver) {
        alert("error, press new-game button");
    } else {
        trialWord = guessInputElement.value;

        if (trialWord.length != word.length) {
            alert("wrong number of letters");
        } else {
            coloringWord(trialWord);
            trials--;
            trialsElement.innerHTML = `remained trials ${trials}`;
        }

        if (word === trialWord || trials == 0) {
            finishGame();
        }
    }
 }

 function coloringWord(trialWord) {
    const arWord = Array.from(trialWord);
    arWord.forEach(function(letter, index){
        lettersDivs[index].innerHTML = letter;
        lettersDivs[index].style.color = getColor(letter, index);
    });
 }

 function getColor(letter, index) {
    let res = "red"
    if (word.includes(letter)) {
        res = word[index] == letter ? "green" : "yellow"
    }
    return res;
 }

 function finishGame() {
    const msg = word === trialWord ? `Congratulations you have guessed the word using ${word.length + 1 - trials} trials` :
        `Sorry, but the number of trials has ended up`;
    alert(msg);

    flGameOver = true;
    playAgainElement.style.display = "block";
 }
 //actions
 startGame();