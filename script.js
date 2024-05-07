/* Create function getComputerChoice
Return string values rock, paper, or scissors.
Use math.random to generate a number between 1 and 3
use if else statement to equate number with answer
1 = Rock
2 = Paper
3 = Scissors */
function getComputerChoice(){
let answer = Math.floor(Math.random() * (4-1) + 1);
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
if (answer == 1){
    return rock;
}
else if(answer == 2){
    return paper;
}
else{
    return scissors;
}
}
/* Create function getHumanChoice
Use Prompt to get user input */

function getHumanChoice(){
    let humanAnswer = prompt("Rock, Paper, or Scissors")
    return humanAnswer;
}

/* Create variables humanScore and computerScore
Initialize variable to 0 */

/* Create playRound function
Define humanChoice and computerChoice
Take the variables as arguments
Make humanSelection case insensitive 
use if else statements to decide winner
console.log a winner
increment humanScore or computerScore */



let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

/* Create playGame function */

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        let lowerHumanChoice = humanChoice.toLowerCase();
        
        if (lowerHumanChoice == computerChoice)
        {
            console.log("You Tied!")
        }
        else if (lowerHumanChoice == "rock" && computerChoice == "paper")
        {
            console.log("You lose! Paper beats Rock.")
            return computerScore+=1;
        }
        else if (lowerHumanChoice == "rock" && computerChoice == "scissors")
        {
            console.log("You win! Rock beats Scissors.")
            return humanScore+=1;
        }
        else if(lowerHumanChoice == "paper" && computerChoice == "rock")
        {
            console.log("You win! Paper beats Rock.")
            return humanScore+=1;
        }
        else if (lowerHumanChoice == "paper" && computerChoice == "scissors")
        {
            console.log("You lose! Scissors beats Paper.")
            return computerScore+=1;
        }
        else if (lowerHumanChoice == "scissors" && computerChoice == "paper")
        {
            console.log("You win! Scissors beats Paper.")
            return humanScore+=1;
        }
        else if(lowerHumanChoice = "scissors" && computerChoice == "rock")
        {
            console.log("You lose! Rock beats Scissors.")
            return computerScore+=1;
        }
}
humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("Your Score: " + humanScore)
console.log("Computer Score: " + computerScore)

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("Your Score: " + humanScore)
console.log("Computer Score: " + computerScore)

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("Your Score: " + humanScore)
console.log("Computer Score: " + computerScore)

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("Your Score: " + humanScore)
console.log("Computer Score: " + computerScore)

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log("Your Score: " + humanScore)
console.log("Computer Score: " + computerScore)
if(humanScore == computerScore)
    {
        console.log("You Tied!")
    }
    else if (humanScore < computerScore)
    {
        console.log("You Lost!")
    }
    else
    {
        console.log("You Won!")
    }
}

playGame();

