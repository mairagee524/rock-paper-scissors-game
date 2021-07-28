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
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })

        // Computer Options
        const computerRPSChoices = ['rock', 'paper', 'scissors'];

        choices.forEach(option => {
            option.addEventListener('click', function() {

                // computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerRPSChoices[computerNumber];

                setTimeout(() => {

                    // here is where we call compareChoices
                    compareChoices(this.textContent, computerChoice);

                    // Update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;

                }, 2000)

                // animations
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            })
        })
    }

    const updateScore = () => {
        const playerWinCount = document.querySelector('.player-score p');
        const computerWinCount = document.querySelector('.computer-score p');

        playerWinCount.textContent = playerScore;
        computerWinCount.textContent = computerScore;
    }

    const compareChoices = (playerChoice, computerChoice) => {

        // update text
        const winner = document.querySelector('.winner');

        // Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie!';
            return; 
        }

        if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
            winner.textContent = 'You Win!';
                playerScore++;
                updateScore();
                return;
        } else {
            winner.textContent = 'Computer wins!';
                computerScore++;
                updateScore();
                return;
        }
    }

    // call all the inner functions
    startGame();
    playGame();
}

game();