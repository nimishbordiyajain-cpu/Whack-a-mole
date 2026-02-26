const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");

let score = 0;
let gameInterval;
let activeHole = null;

function randomHole() {
    holes.forEach(hole => hole.textContent = "🌱");

    const index = Math.floor(Math.random() * holes.length);
    activeHole = holes[index];
    activeHole.textContent = "🐹";
}

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;

    gameInterval = setInterval(randomHole, 800);

    setTimeout(() => {
        clearInterval(gameInterval);
        alert("Game Over! 🥀 Your score: " + score);
    }, 15000);
}

holes.forEach(hole => {
    hole.addEventListener("click", () => {
        if (hole === activeHole) {
            score++;
            scoreDisplay.textContent = score;
            hole.textContent = "🥀";
            activeHole = null;
        }
    });
});
