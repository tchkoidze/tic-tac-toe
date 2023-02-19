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
const scoreBox2Players = document.querySelectorAll(".score-box-2players");
const cells = document.querySelectorAll(".cell");
let z;
let roundCounter = 0;
const arrx = [];

let x;
let o;
//NEW GAME (VS CPU)

newGameCpuBtn.addEventListener("click", () => {
  console.log(5);
  starterPage.style.display = "none";
  vsCpuSection.style.display = "flex";
});

//NEW GAME  (VS PLAYER)

//check cell
function checkx(ev) {
  let oclicked;
  let xclicked;
  if (x) {
    console.log(x);
    //console.log(oclicked);

    ev.target.classList.add("cell-x");
    console.log(!xclicked);
    o = true;
    x = false;

    //z = ev.target.value = "x";
    //o = true;
    //x = false;
    console.log(ev.target);
    arrx.push(ev.target.dataset.value);
    console.log(arrx);
  } else {
    ev.target.classList.add("cell-o");
    o = false;
    x = true;

    //o = false;
    //x = true;
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
  /*if (x) {
    turnX.style.display = "block";
  } else {
    turnO.style.display = "block";
  }
  */
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
    console.log(x);
    for (let i of cells) {
      i.addEventListener("click", (event) => {
        //event.target.classList.add("cell-x");

        checkx(event);
        console.log(x);
      });
      console.log(x);
    }
  }

  if (o) {
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
        checkx(e);
        console.log("o" + o);
      });
      console.log(x);
    }
  }

  /*function checko() {
    turnX.style.display = "none";
    turnO.style.display = "block";
    for (let m of cells) {
      m.addEventListener("click", (e) => {
        e.target.classList.add("cell-o");
      });
      x = true;
      o = false;
      console.log(x);
    }
  }*/
});

/* 
if (o) {
    console.log(7);
    turnX.style.display = "none";
    turnO.style.display = "block";
    for (let m of cells) {
      m.addEventListener("click", (e) => {
        e.target.classList.add("cell-o");
      });
      x = true;
      o = false;
      console.log(x);
    }
    console.log(x);
  }
*/

/*
function checkputternX() {
  for(let t=0; t<z.length; t++){
    if(z[t]==1)
  }
}
*/

/* check function
function checkx(ev) {
  let oclicked;
  let xclicked;
  if (x) {
    console.log(x);
    console.log(oclicked);
    if (!xclicked && !oclicked) {
      xclicked = document.querySelector(".cell-x");
      ev.target.classList.add("cell-x");
      console.log(!xclicked);
      o = true;
      x = false;
    }
    //z = ev.target.value = "x";
    //o = true;
    //x = false;
    console.log(ev.target);
    arrx.push(ev.target.dataset.value);
    console.log(arrx);
  } else {
    if (!oclicked && !xclicked) {
      oclicked = ev.target.classList.add("cell-o");
      o = false;
      x = true;
    }
    //o = false;
    //x = true;
  }
}
*/
