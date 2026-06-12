
let ran = Math.floor(Math.random()*100)+1;
console.log(ran);
const guessField = document.querySelector('#guessField')
const submit=document.querySelector('#subt')
const prev_guesses=document.querySelector('.guesses')
const remain=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p =document.createElement('p')
let prevGuess = []
let numGuess = 1
let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(guessField.value)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if((guess<1 && guess>100) || guess=='' || isNaN(guess)){
        alert("please enter the valid number")
    } 
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number is ${ran}`)
            exitGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === ran){
        displayMessage('you guessed the right number')
        exitGame()
    } else if(guess < ran){
        displayMessage('number is low')

    } else if(guess > ran){
        displayMessage('number is high')
        
    }

}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`

}
function displayGuess(guess){
    guessField.value=''
    prev_guesses.innerHTML+= `${guess}  ` 
    numGuess++
    remain.innerHTML=`${11-numGuess}`
}
function newGame(){
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click',function(e){
        let ran = Math.floor(Math.random()*100)+1;
        prevGuess=[]
        numGuess=1
        playGame=true
        prev_guesses.innerHTML=''
        remain.innerHTML=`${11-numGuess}  `
        guessField.removeAttribute('disabled')
        startOver.removeChild(p)
    })
}
function exitGame(){
    guessField.value=''
    guessField.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false;
    newGame()
}
