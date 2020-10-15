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
                
            })
        })

        const computerNumber = Math.floor(Math.random() * 3);

    }

    // call all the inner functions
    startGame();
    playGame();
}

// start the game function
game();