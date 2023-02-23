//starter page variables
const starterX = document.querySelector(".player1-btn");
const starterO = document.querySelector(".player2-btn");
const newGameCpuBtn = document.querySelector(".vs-cpu-btn");
const newGamePlayerBtn = document.querySelector(".vs-player-btn");

const starterPage = document.querySelector(".newgame-maue-cotainer");

//VS CPU page variables
const vsCpuSection = document.querySelector(".new-cpu-game-section");
const scoreBox = document.querySelectorAll(".score-box");
const turnX = document.querySelector(".turn-x");
const turnO = document.querySelector(".turn-o");

//VS Player page variables
const restart = document.querySelector(".restart-btn");
const scoreBox2Players = document.querySelectorAll(".score-box-2players");
const cells = document.querySelectorAll(".cell");
const takesRound = document.querySelector(".x-takes-round-container");

let roundCounter = 0;

let score1 = 0;
let score2 = 0;
const restartGameBtns = document.querySelector(".restart-game-btns");
const cancelBtn = document.querySelector(".cancel-btn");
const yesRestartBtn = document.querySelector(".yes-restart-btn");
const takesRoundButtons = document.querySelector(".takes-round-buttons");
const quit = document.querySelector(".quit-btn");
const nextRound = document.querySelector(".next-round-btn");
const winLoseHeader = document.querySelector(".win-lose-header");
const takeRound = document.querySelector(".take-round");
const p2Score = document.querySelector(".p2-score");
const p1Score = document.querySelector(".p1-score");
const p1p2Tie = document.querySelector(".two-players-ties");
let tie = 0;

let xwiner;
let owiner;

let winer;

let x;

let o;

//resturt button
restart.addEventListener("click", (event) => {
  winLoseHeader.style.display = "none";
  takeRound.textContent = "RESTART GAME?";
  takesRoundButtons.style.display = "none";
  restartGameBtns.style.display = "block";
  takeRound.style.color = "#A8BFC9";
  //quit.textContent = "NO, CANCEL";
  //quit.style.width = "139px";
  //nextRound.textContent = "YES, RESTART";
  takesRound.style.display = "flex";
  console.log(nextRound.className);

  yesRestartBtn.addEventListener("click", () => {
    starterPage.style.display = "flex";
    vsCpuSection.style.display = "none";
    takesRound.style.display = "none";
    for (let cell = 0; cell < cells.length; cell++) {
      cells[cell].classList.remove("cell-x");
      cells[cell].classList.remove("cell-o");
    }
    roundCounter = 0;
    score1 = 0;
    score2 = 0;
    tie = 0;
    p2Score.textContent = "0";
    p1Score.textContent = "0";
    p1p2Tie.textContent = "0";
  });
  /*yes.addEventListener("click", () => {
    starterPage.style.display = "flex";
    vsCpuSection.style.display = "none";
    takesRound.style.display = "none";
    console.log(cells);
    for (let cell = 0; cell < cells.length; cell++) {
      cells[cell].classList.remove("cell-x");
      cells[cell].classList.remove("cell-o");
    }
    roundCounter = 0;
    console.log(roundCounter);
    nextRound.classList.remove("yes-restart");
    nextRound.classList.add("next-round-btn");
    score1 = 0;
    score2 = 0;
    tie = 0;
    p2Score.textContent = "0";
    p1Score.textContent = "0";
    p1p2Tie.textContent = "0";
    //turnX.style.display = "block";
    //turnO.style.display = "none";
    
  });
  /*nextRound.addEventListener("click", () => {
    starterPage.style.display = "flex";
    vsCpuSection.style.display = "none";
    takesRound.style.display = "none";
    console.log(cells);
    for (let cell = 0; cell < cells.length; cell++) {
      cells[cell].classList.remove("cell-x");
      cells[cell].classList.remove("cell-o");
    }
  });*/
});

//NEW GAME (VS CPU)

newGameCpuBtn.addEventListener("click", () => {
  console.log(5);
  starterPage.style.display = "none";
  vsCpuSection.style.display = "flex";
});

//NEW GAME  (VS PLAYER)

//check cell
function checkx(ev) {
  if (x) {
    console.log(x);
    ev.target.classList.add("cell-x");
    o = true;
    x = false;
  } else {
    ev.target.classList.add("cell-o");
    o = false;
    x = true;
  }
}

//check winer
function checkwiner(arrays) {
  console.log(999);
  const winingCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  console.log(winingCombinations);
  for (let j = 0; j < winingCombinations.length; j++) {
    const [a, b, c] = winingCombinations[j];
    if (
      arrays[a].className == "cell cell-x" &&
      arrays[b].className == "cell cell-x" &&
      arrays[c].className == "cell cell-x"
    ) {
      console.log("x win");
      score2 = score2 + 1;
      document.querySelector(".p2-score").textContent = score2;
      //vsCpuSection.style.display = "none";
      takesRound.style.display = "flex";
      winLoseHeader.style.display = "block";
      winLoseHeader.textContent = "PLAYER 2 WINS!";
      takeRound.textContent = "X TAKES THE ROUND";
      takeRound.style.color = "#31C3BD";
      quit.textContent = "QUIT";
      quit.style.width = "76px";
      nextRound.textContent = "NEXT ROUND";
      takesRoundButtons.style.display = "block";
      restartGameBtns.style.display = "none";
      winer = true;
      owiner = false;
      xwiner = true;

      nextrounds();
      roundCounter++;
      turnX.style.display = "block";
      turnO.style.display = "none";
      break;
    } else if (
      arrays[a].className == "cell cell-o" &&
      arrays[b].className == "cell cell-o" &&
      arrays[c].className == "cell cell-o"
    ) {
      console.log("o wine");
      score1 = score1 + 1;
      takesRound.style.display = "flex";
      document.querySelector(".p1-score").textContent = score1;
      winLoseHeader.style.display = "block";
      winLoseHeader.textContent = "PLAYER 1 WINS!";
      takeRound.textContent = "O TAKES THE ROUND";

      quit.style.width = "76px";
      nextRound.textContent = "NEXT ROUND";
      takeRound.style.color = "#F2B137";
      takesRoundButtons.style.display = "block";
      restartGameBtns.style.display = "none";
      owiner = true;
      xwiner = false;
      //x = false;
      //o = true;
      roundCounter++;
      turnX.style.display = "none";
      turnO.style.display = "block";
      nextrounds();
    }
  }
  if (
    arrays[0].className != "cell" &&
    arrays[1].className != "cell" &&
    arrays[2].className != "cell" &&
    arrays[3].className != "cell" &&
    arrays[4].className != "cell" &&
    arrays[5].className != "cell" &&
    arrays[6].className != "cell" &&
    arrays[7].className != "cell" &&
    arrays[8].className != "cell"
  ) {
    console.log("tie");
    tie = tie + 1;
    console.log(tie);
    p1p2Tie.textContent = tie;
    winLoseHeader.style.display = "none";
    takeRound.textContent = "ROUND TIED";
    takesRound.style.display = "flex";
    takesRoundButtons.style.display = "block";
    restartGameBtns.style.display = "none";
    nextrounds();
  }
}

//select x
starterX.addEventListener("click", () => {
  //turnX.style.display = "block";
  x = true;
  console.log(x);
  o = false;
});

//select o
starterO.addEventListener("click", () => {
  //turnO.style.display = "block";
  o = true;
  x = false;
  console.log(o);
});

newGamePlayerBtn.addEventListener("click", () => {
  if (o || x) {
    console.log(5);
    starterPage.style.display = "none";
    vsCpuSection.style.display = "flex";
    for (let elem = 0; elem < scoreBox.length; elem++) {
      console.log(2);
      scoreBox[elem].style.display = "none";
      scoreBox2Players[elem].style.display = "flex";
    }
  }

  //select cell
  if (x) {
    turnX.style.display = "block";
    turnO.style.display = "none";
    console.log(x);
    for (let i of cells) {
      i.addEventListener("click", (event) => {
        //let clickedx = document.querySelector(".cell-x");
        //let clickedo = document.querySelector(".cell-o");
        console.log(event.target.className);
        if (event.target.className == "cell") {
          console.log(winer);
          checkx(event);
          console.log(cells);
          checkwiner(cells);

          console.log(x);
        }
      });
      console.log(x);
    }
  }

  if (o) {
    turnX.style.display = "block";
    turnO.style.display = "none";
    console.log("o" + o);
    //it is needed to check if it is first turn
    if (roundCounter == 0) {
      x = true;
      y = false;
    }
    console.log(30);
    //turnX.style.display = "none";
    // turnO.style.display = "block";
    for (let m of cells) {
      m.addEventListener("click", (e) => {
        //e.target.classList.add("cell-o");
        if (e.target.className == "cell") {
          console.log(winer);
          checkx(e);
          checkwiner(cells);
        }

        //checkx(e);
        console.log("o" + o);
      });
      console.log(x);
    }
  }
});

//quit button

quit.addEventListener("click", () => {
  starterPage.style.display = "flex";
  vsCpuSection.style.display = "none";
  takesRound.style.display = "none";
  console.log(cells);
  for (let cell = 0; cell < cells.length; cell++) {
    cells[cell].classList.remove("cell-x");
    cells[cell].classList.remove("cell-o");
  }
  roundCounter = 0;
  score1 = 0;
  score2 = 0;
  tie = 0;
  p2Score.textContent = "0";
  p1Score.textContent = "0";
  p1p2Tie.textContent = "0";
  //cells.classList.remove("cell-x");
});

//next round button
function nextrounds() {
  nextRound.addEventListener("click", () => {
    starterPage.style.display = "none";
    vsCpuSection.style.display = "flex";
    takesRound.style.display = "none";
    for (let cell = 0; cell < cells.length; cell++) {
      cells[cell].classList.remove("cell-x");
      cells[cell].classList.remove("cell-o");
    }
    if (xwiner == true) {
      x = true;
      o = false;
    }
    if (owiner == true) {
      x = false;
      o = true;
    }
    if (roundCounter == 0) {
      x = true;
      y = false;
    }
  });
}
