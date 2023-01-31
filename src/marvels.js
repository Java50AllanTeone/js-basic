//references to HTML elements
const questionElement = document.getElementById("question");
const wordInputElement = document.getElementById("word-input");
const remainedLettersElement = document.getElementById("letters-remained");
const letterInputElement = document.getElementById("letter-input");
const wordElement = document.querySelector(".word");
const resultMessage = document.getElementById("result-message");
const playAgain = document.getElementById("play-again");
let wordLettersElement;
//global variables
const questionsWords = [["question1", "answer1"], ["question2","answer2"]];
let currentIndex = 0;
let initialLettersNumber;
let remainedLettersNumber;
//functions
function startGame(){
    wordInputElement.value = '';
    wordInputElement.readOnly = true;
    questionElement.innerHTML = questionsWords[currentIndex][0];
    playAgain.style.display='none';
    resultMessage.innerHTML='';
    wordElement.innerHTML = getWordDivs();

    initialLettersNumber = questionsWords[currentIndex][0].length;
    remainedLettersNumber = Math.floor(initialLettersNumber * 0.3);


}

function getWordDivs() {
    const arr = Array.from(questionsWords[currentIndex][1]);

    return arr.reduce(function(accumulator, cur) {
        return accumulator + `<div class="bg-black">${cur}</div>`;
    }, "");
}

function checkWord() {
  const msg = wordInputElement.value === questionsWords[currentIndex][1] ? "True" : "False";
  finishGame(msg);
}

function processLetter() {
    const letters = document.querySelectorAll(".bg-black");

    letters.forEach(function(item) {
        if (item.innerHTML === letterInputElement.value) {
            item.removeAttribute("class");
        }
    });

    remainedLettersNumber--;
    resultMessage.innerHTML = remainedLettersNumber;

    if (remainedLettersNumber == 0) {
        takeChance();
    }
}

function takeChance() {
    wordInputElement.readOnly = false;
    letterInputElement.readOnly = true;
}

function finishGame(msg) {
    resultMessage.innerHTML = msg;
    playAgain.style.display='block';
    wordInputElement.readOnly = true;

}
//actions
startGame();