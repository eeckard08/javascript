console.log("hello world")

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

function gamePlay(x, y) {
    if (x === "rock" && y === "rock") {
        return "Draw";
    }
    else if (x === "rock" && y === "scissors") {
        return "Player One wins";
    }
    else if (x === "rock" && y === "paper") {
        return "Player Two wins";
    }
    else if (x ==="scissors" && y === "scissors") {
        return "Draw";
    }
    else if (x ==="scissors" && y === "rock") {
        return "Player Two wins";
    }
    else if (x ==="scissors" && y === "paper") {
        return "Player One wins";
    }
    else if (x ==="paper" && y === "paper") {
        return "Draw";
    }
    else if (x === "paper" && y === "scissors") {
        return "Player Two wins";
    }
    else {
        return "Player One wins";
    }
}
alert(gamePlay(playerOne(),playerTwo()));




/*function computerPlay(a,b){
    if (a === b) {
        return "Draw";
    }
    else 
};
*/
