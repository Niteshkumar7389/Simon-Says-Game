let gameSeq = [];
let userSeq = [];
let buttons = ["red", "green", "yellow", "pink"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (start == false) {
    console.log("game starting....");
    start = true;

    levelUp();
  }
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let index = Math.floor(Math.random() * 3);
  let color = buttons[index];
  let randbtn = document.querySelector(`.${color}`);
  gameSeq.push(color);
  console.log(gameSeq);
  btnflash(randbtn);
}

function answer(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}
function btnPress() {
  let btn = this;
  btnflash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  answer(userSeq.length - 1);
}

let btns = document.querySelectorAll(".btn");
for (btn of btns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
