const game = () => {
    let playerScore = 0;
    let computerScore = 0; 


    // Start the game
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match ');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');

        })
    }

    // Play Match
    const playGame = () => {
        const choices = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        // Computer Options
        const computerOptions = [ 'rock', 'paper', 'scissors'];

        choices.forEach(option => {
            option.addEventListener('click', function() {

                // computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                // here is where we call compareChoices
                compareChoices(this.textContent, computerChoice);

                // Update Imges
                playerHand.scr = `./assets/${this.textContent}.png`;

                computerHand.scr = `./assets/${this.textContent}.png`

            })
        })
    }

    const compareChoices = (playerChoice, computerChoice) => {

        // update text
        const winner = document.querySelector('.winner');

        // Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie!';
            return; 
        }

        // Check for a Rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
                return;
            } else {
                winner.textContent = 'Computer wins';
                return;
            }
        }

        // Check for a Paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins';
                return;
            } else {
                winner.textContent = 'Player wins';
                return;
            }
        }

        // Check for a Scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins';
                return;
            } else {
                winner.textContent = 'Player wins';
                return;
            }
        }
    }

    // call all the inner functions
    startGame();
    playGame();
}

// start the game function
game();