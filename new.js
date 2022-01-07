console.log("hello world")
/*
 function playerOneprompt() {
    let playerOne = prompt("please input your selection", ""); // this is to prompt the user
    console.log("Player one has " + playerOne);
    return playerOne;
}

//let playerOne = prompt("please input your selection", ""); // this is to prompt the user
//console.log("Player one has " + playerOne); // this adds a console log to indicate player one's selection
/*
let playerOne = playerOneprompt();
var result = [4];
*/

/* this was a method to determine an automatic choice for player one
function playerOne(){
    let x = Math.floor(Math.random() * 100 + 1);
    if(x < 33) {
        console.log("player One has rock");
        return "rock";
    }
    else if(x >= 33 && x < 66) {
        console.log("player One has paper");
        return "paper";
    }
    else {
        console.log("player One has scissors");
        return "scissors";
    }
}
*/
/*
function playerTwo(){
    let x = Math.floor(Math.random() * 100 + 1);
    if(x < 33) {
        console.log("player Two has rock");
        return "rock";
    }
    else if(x >= 33 && x < 66) {
        console.log("player Two has paper");
        return "paper";
    }
    else {
        console.log("player Two has scissors");
        return "scissors";
    }
}
//these are the possible outcomes for each case
const case1 = "Player one wins";
const case2 = "Player two wins";
const case3 = "Draw";

// this is the logic for each outcome
function gamePlay(x, y) {
    if (x === "rock" && y === "rock") {
        return "Draw";
    }
    else if (x === "rock" && y === "scissors") {
        return "Player one wins";
    }
    else if (x === "rock" && y === "paper") {
        return "Player two wins";
    }
    else if (x ==="scissors" && y === "scissors") {
        return "Draw";
    }
    else if (x ==="scissors" && y === "rock") {
        return "Player two wins";
    }
    else if (x ==="scissors" && y === "paper") {
        return "Player one wins";
    }
    else if (x ==="paper" && y === "paper") {
        return "Draw";
    }
    else if (x === "paper" && y === "scissors") {
        return "Player two wins";
    }
    else {
        return "Player one wins";
    }
}

function gameCounter() {
    let i = 0;
    while (i < 5) {
        let playerOne = playerOneprompt();
        alert(gamePlay(playerOne.toLowerCase,playerTwo()));
        i++;
    }
}

//gameCounter();
/*alert(gamePlay(playerOne.toLowerCase,playerTwo()));
result[0] = gamePlay(playerOne.toLowerCase,playerTwo);
*/
//console.log(result[0]);



/*function computerPlay(a,b){
    if (a === b) {
        return "Draw";
    }
    else 
};
*/
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
//console.log(initiate);
addEventListener("click", initiateGame());
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

//gameCounter();
//console.log(game);
//gameWinner(gameAdder(game));

