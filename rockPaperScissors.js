

// Get the player's move from command line

const args = process.argv.slice(2);

// Validate input exists
if (args.length === 0) {
    console.error('Error: Please provide your move');
    console.error('Usage: node rockPaperScissors.js <rock|paper|scissors>');
    console.error('Example: node rockPaperScissors.js rock');
    return;
}

// Get the player's move and convert to lowercase
const playerMove = args[0].toLowerCase();

const validMoves = ['rock', 'paper', 'scissors'];
if (!validMoves.includes(playerMove)) {
    console.error(`Error: "${playerMove}" is not valid move`);
    console.error(`Valid moves are: rock, paper, scissors`);
    return;
}

// Generate computer's move
const randomIndex = Math.floor(Math.random() * validMoves.length);
const computerMove = validMoves[randomIndex];

// Determine the winner
let result;

if (playerMove === computerMove) {
    result = "It's a draw";
    
}   else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'scissors' && computerMove === 'paper') ||
    (playerMove === 'paper' && computerMove === 'rock') 
) {
    result = 'You win';
} else {
    result = 'You lose!';
}

// Display final result
console.log(result);
console.log(`You chose: ${playerMove}`);
console.log(`Computer chose : ${computerMove}`);








