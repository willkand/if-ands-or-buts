const prompt = require('prompt-sync')({sigint: true});

let Player1Choose = (prompt("Player 1, Choose: Rock, Paper, Or Scissors: "));

let Player2Choose = (prompt("Player 2, Choose: Rock, Paper, Or Scissors: "));

if (Player1Choose === "rock" && Player2Choose === "scissors"){
    console.log("Player 1 Wins, Player 2 better luck next time. ");
} else if (Player1Choose === "paper" && Player2Choose === "rock"){
    console.log("Player 1 Wins, Player 2 better luck next time. ");
} else if (Player1Choose === "scissors" && Player2Choose === "paper"){
    console.log("Player 1 Wins, Player 2 better luck next time. ");
}

else if (Player2Choose === "rock" && Player1Choose === "scissors"){
    console.log("Player 2 Wins, Player 1 better luck next time. ");
} else if (Player2Choose === "paper" && Player1Choose === "rock"){
    console.log("Player 2 Wins, Player 1 better luck next time. ");
} else if (Player2Choose === "scissors" && Player1Choose === "paper"){
    console.log("Player 2 Wins, Player 1 better luck next time. ");
}

else if (Player1Choose === "rock" && Player2Choose === "rock"){
    console.log("Tie");
} else if (Player1Choose === "paper" && Player2Choose === "paper"){
    console.log("Tie");
} else if (Player1Choose === "scissors" && Player2Choose === "scissors"){
    console.log("Tie");
}

else console.log("error")