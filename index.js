

const answer = Math.floor(Math.random()* 100 +1);
let guesses = 0;


document.getElementById("SubmitButton").onclick = function(){
    let guess = document.getElementById("guessfield").value;
    guess = Number(guess);
    guesses+=1;

    if(guess == answer){
        document.getElementById("txt").textContent = (`You Won! It took you ${guesses} guesses to Win`);
    }
    else if(guess < answer){
        document.getElementById("txt").textContent = (`Too small`);
    }
    else{
        document.getElementById("txt").textContent = (`Too large`);
    }
}