console.log("hello world")

let initiate = prompt("would you like to play? y/n", "");

const case1 ="Player one wins";
const case2 ="Player two wins";
const case3 ="Draw";

let player2 = 0;
let player1 = 0;
var game = [];

// these are just test console logs to check what each player has chosen quickly
console.log("player one has chosen", player1);
console.log("Player two has chosen", player2);
initiateGame();

//console.log(initiate);
//this will call all the functions together


//this is the function that determines what player two's choice is
function playerTwologic(player2){
    let x = player2;
    if(x<33){
        return "rock";
    }
    else if(x >=33 && x<66){
        return "paper";
    }
    else return "scisors";
}

//this is the function that prompts player 1 to provide a choice
function playerOneprompt() {
    let x = prompt("Please make your decision", "");
    let y = x.toLowerCase();
    console.log(y);
    if(y==="rock" || y==="scissors" || y==="paper"){
        return y;
    }
    else alert("I didn't get that refresh and try again");
}

// this is the prompt to start the game //
function initiateGame(){
        if(initiate === "y") {
         alert("Okay, let's play! ");
         alert("Best 3 out of 5 wins the tournament");
         gameCounter();
         console.log(game);
         gameWinner(gameAdder(game));
        }
        else if(initiate === "n") {
            alert("Okay, exit page");
        }
        else {
            alert("I'm sorry I'm not sure what you meant")
        }
}
//This is the game logic
function gameLogic() {
    if(player1 === "rock" && player2 === "rock" || player1 === "paper" && player2 === "paper" || player1 ==="scissors" && player2 ==="scissors"){
        console.log(case3);
        return 0;
    }
    else if (player1 ==="rock" && player2 ==="scissors" || player1 ==="paper" && player2 ==="rock" || player1 ==="scissors" && player2 ==="paper"){
        console.log(case1);
        return 1;
    }
    else console.log(case2);
    return -1;
}

//this will be the game counter
function gameCounter() {
    let i = 0
    while(i < 5){
        player1 = playerOneprompt();
        player2 = playerTwologic(Math.floor(Math.random()*100 + 1));
        console.log("player one has chosen", player1);
        console.log("Player two has chosen", player2);
        game[i] = gameLogic();
        i++;
    }
}
// this function will determine the winner of the five games
function gameAdder(x){
    result = x[0]+x[1]+x[2]+x[3]+x[4];
    console.log(result);
    return result;
}
function gameWinner (x){
    if (x==0){
        console.log("No one wins the tournament");
        alert("No one wins the tournament");
        }
    else if(x<0){
        console.log("Player two wins the tournament");
        alert("Player two wins the tournament");
    }
    else {  
        console.log("Player One wins the tournament");
        alert("Player One wins the tournament");
    }

}
// i'm gonna try to make a function that returns factorials