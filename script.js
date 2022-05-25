const playerInput = document.querySelector("#player-input");
const botInput = document.querySelector("#bot-input");
const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorButton = document.querySelector("#scissor-btn");
const startButton = document.querySelector("#start-btn");
const retryButton = document.querySelector("#retry-btn");
const gameResultEl = document.querySelector("#game-result");

let playerSeletion = null;
let botSeletion = null;

const gameResult = {
	PLAYER_WIN: 0,
	BOT_WIN: 1,
	TIE: 2,
	INVALID: 3,
};

const rps = {
	ROCK: "ROCK",
	PAPER: "PAPER",
	SCISSOR: "SCISSOR",
};

function getBotSelection() {
	var random = Math.floor(Math.random() * 3);
	botSeletion = Object.keys(rps)[random];
	botInput.value = botSeletion;
}

function getTheWinner() {
	var gs;

	if (playerInput == null || botInput == null) {
		gs = gameResult.INVALID;
	} else {
		if (
			(playerSeletion == rps.ROCK && botSeletion == rps.SCISSOR) ||
			(playerSeletion == rps.PAPER && botSeletion == rps.ROCK) ||
			(playerSeletion == rps.SCISSOR && botSeletion == rps.PAPER)
		)
			gs = gameResult.PLAYER_WIN;
		else if (
			(playerSeletion == rps.ROCK && botSeletion == rps.PAPER) ||
			(playerSeletion == rps.PAPER && botSeletion == rps.SCISSOR) ||
			(playerSeletion == rps.SCISSOR && botSeletion == rps.ROCK)
		)
			gs = gameResult.BOT_WIN;
		else gs = gameResult.TIE;
	}

	switch (gs) {
		case gameResult.PLAYER_WIN:
			gameResultEl.innerHTML = "PLAYER WIN";
			break;
		case gameResult.BOT_WIN:
			gameResultEl.innerHTML = "BOT WIN";
			break;
		case gameResult.TIE:
			gameResultEl.innerHTML = "TIE";
			break;
		case gameResult.INVALID:
			gameResultEl.innerHTML = "INVALID GAME RESULT";
			break;
	}
}

rockButton.addEventListener("click", () => {
	playerSeletion = rps.ROCK;
	playerInput.value = rps.ROCK;
});

paperButton.addEventListener("click", () => {
	playerSeletion = rps.PAPER;
	playerInput.value = rps.PAPER;
});

scissorButton.addEventListener("click", () => {
	playerSeletion = rps.SCISSOR;
	playerInput.value = rps.SCISSOR;
});

startButton.addEventListener("click", () => {
	getBotSelection();
	getTheWinner();
});

retryButton.addEventListener("click", () => {
	playerInput.value = null;
	botInput.value = null;
	gameResultEl.innerHTML = null;
});
