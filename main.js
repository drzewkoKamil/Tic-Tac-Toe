const player = (name, activeStatus, sign) => {
    const getStatus = () => activeStatus;
    return {getStatus}
};

const gameBoard = (() => {
    let gameBoardArr = ["X", "O", "X", "X", "O", "X", "O", "", "X"]
    return {gameBoardArr}
})();

const displayController = (() => {
    let gameStatus = false;
    const createUI = () => {
        const mainContainer = document.getElementById("mainFlexContainer");

        const gameBoardContainer = document.createElement("div");
        gameBoardContainer.id = "gameBoardContainer";
        mainContainer.appendChild(gameBoardContainer);

        const header = document.createElement("h2");
        header.innerText = "Tic Tac Toe";
        gameBoardContainer.appendChild(header);

        const gameBoardDiv = document.createElement("div");
        gameBoardDiv.id = "gameBoard";
        gameBoardContainer.appendChild(gameBoardDiv);

        for (let i = 0; i < 9; i++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            //Temporary
            cell.innerText = gameBoard.gameBoardArr[i];
            cell.id = `${i}`;
            cell.onclick = function () {
                if (cell.innerText === "") {
                    if (player.activeStatus) {
                        cell.innerText = player.sign;
                    }
                }
            };
            gameBoardDiv.appendChild(cell)
        }


        const player1input = document.createElement("input")
        player1input.type = "text"
        player1input.placeholder = "Player 1 Name"
        player1input.id= "player1input"
        gameBoardContainer.appendChild(player1input);
        const player2input = document.createElement("input")
        player2input.type = "text"
        player2input.placeholder = "Player 2 Name"
        player2input.id= "player2input"
        gameBoardContainer.appendChild(player2input);
        const startButton = document.createElement("button");
        startButton.innerText = "START";
        startButton.addEventListener("click", startGame)
        startButton.id = "startButton";
        gameBoardContainer.appendChild(startButton)


    };

    const checkPlayersNames = () => {
        const input1 = document.getElementById("player1input");
        const input2 = document.getElementById("player2input");
        if (input1.value === "") {
            return false;
        }
        if (input2.value === "") {
            return false;
        }
        return true;
    };

    const startGame = () => {
        const playerNames = document.querySelectorAll("input");
        if (checkPlayersNames()) {
            let player1 = player(playerNames[0].innerText, true, "X")
            let player2 = player(playerNames[1].innerText,  false, "O")
        }
        gameStatus = true;
        console.log(gameStatus)
    };

    return {createUI, startGame}
})();


//main
displayController.createUI()

