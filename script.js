
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

function scoreList(winner)
{
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    listItem.textContent = winner;
    list.appendChild(listItem)
    list.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;

}
let humanScore = 0;
let computerScore = 0;

function playGame(){

    let playerSelection = ""
    let computerChoice = "";

    const rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
        playerSelection = "rock";
        computerChoice = getComputerChoice();
        playRound(playerSelection, computerChoice);
    });

    const paper = document.querySelector("#paper");
    paper.addEventListener("click", () =>{
        playerSelection = "paper";
        computerChoice = getComputerChoice();
        playRound(playerSelection, computerChoice);
    });
    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () =>{
        playerSelection = "scissors";
        computerChoice = getComputerChoice();
        playRound(playerSelection, computerChoice);
        
    });

    function playRound(playerSelection, computerChoice){

        const results = document.querySelector("#results");
        const list = document.querySelector("#list");
        const content = document.querySelector("#content");

        if (humanScore === 5 || computerScore === 5){
            finalResults(humanScore, computerScore);
        }
        else{
            if (playerSelection == computerChoice)
            {
                content.textContent = "You Tied!";
                
            }
            else if (playerSelection == "rock" && computerChoice == "paper")
            {
                content.textContent ="You lose! Paper beats Rock.";
                return scoreList(computerScore+=1);
                
            }
            else if (playerSelection == "rock" && computerChoice == "scissors")
            {
                content.textContent = "You win! Rock beats Scissors.";
                return scoreList(humanScore+=1);
            }
            else if(playerSelection == "paper" && computerChoice == "rock")
            {
                content.textContent = "You win! Paper beats Rock.";
                return scoreList(humanScore+=1);
            }
            else if (playerSelection == "paper" && computerChoice == "scissors")
            {
                content.textContent = "You lose! Scissors beats Paper.";
                return scoreList(computerScore+=1);
            }
            else if (playerSelection == "scissors" && computerChoice == "paper")
            {
                content.textContent = "You win! Scissors beats Paper.";
                return scoreList(humanScore+=1);
            }
            else if(playerSelection = "scissors" && computerChoice == "rock")
            {
                content.textContent = "You lose! Rock beats Scissors.";
                return scoreList(computerScore+=1);
            }
        }  
    }
   
}
function finalResults(humanScore, computerScore){
    if(humanScore == computerScore)
    {
        alert("You tied the game!")
    }
    else if (humanScore < computerScore)
    {
        alert("You lost the game!")
    }
    else
    {
        alert("You won the game!")
    }
}
playGame();


