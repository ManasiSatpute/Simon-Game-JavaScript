let gameSeq = [];
let userSeq = [];
let btns = ["box1", "box2", "box3", "box4"];
let started = false;
let level = 0;
let scoreDisplay = document.querySelector("#score");
let highScoreDisplay = document.querySelector("#highScore");

let highScore = 0;


let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];   // clear user sequence every level
    level++;
    h3.innerText = `Level ${level}`;

    let random = Math.floor(Math.random() * 4);
    let randomColor = btns[random];
    let randombtn = document.querySelector(`#${randomColor}`);

    gameSeq.push(randomColor);
    console.log("Game Sequence:", gameSeq);

    btnFlash(randombtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {

        // if user completed full sequence
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }

    } else {
        h3.innerText = `Game Over! Press any key to restart`;
        resetGame();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    console.log("User Sequence:", userSeq);

    checkAns(userSeq.length - 1);
}

function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let allBtns = document.querySelectorAll(".box > div");

for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
