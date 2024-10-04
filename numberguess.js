const user = document.querySelector(".start")
user.onclick = ()=>{
    const username = prompt("Enter your name : ")
    user.textContent = `Player : ${username}`
    user.disabled = true
}
let guesscnt = 10
const checkbtn = document.querySelector(".check")

const turns = document.querySelector(".turns")

const gameOver = document.querySelector(".game")

let Guessnum = Math.floor(Math.random()*100) + 1
console.log(Guessnum)

let guessField = document.querySelector("#number")
gameOver.textContent=''
checkbtn.addEventListener("click", checkGuess)

function checkGuess(){
    let userGuess = Number(guessField.value)
    
    if(userGuess === Guessnum){
        gameOver.textContent = "Yayy! You got it!"
        setGameOver()
        
    }
    else if (guesscnt === 0){
        gameOver.textContent = "!!!!Game Over!!!!"
        setGameOver()
        
    }
    else if (userGuess < Guessnum){
        gameOver.textContent = "Hint : The number is greater than your previous guess!"
    
    }
    else {
        gameOver.textContent = "Hint : The number is less than your previous guess!"
    }
    guesscnt = guesscnt - 1

    guessField.value = ''
    turns.textContent = `Turns left : ${guesscnt}`
    guessField.focus()
}
function setGameOver(){
    guessField.disabled = true
    checkbtn.disabled = true
    user.textContent="start new Game"
    user.disabled = false
    user.addEventListener("click", resetGame)
}
function resetGame(){
    guessField.disabled = false
    checkbtn.disabled = false
    guessField.value =''
    guesscnt = 10
    turns.textContent = `Turns left : ${guesscnt}`
    //user.textContent = "start Game "
    gameOver.textContent="Start Again !"
    guessField.focus()
    Guessnum = Math.floor(Math.random()*100) + 1
}