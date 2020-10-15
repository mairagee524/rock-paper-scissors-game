const game = () => {
    let playerScore = 0;
    let computerScore = 0; 

    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match ');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
        })

    }

    // call all the inner functions
}

//