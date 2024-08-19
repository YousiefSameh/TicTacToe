const title = document.querySelector(".title");
let turn = 'x';
let arrayOfSquares = [];

function game(id) {
  let el = document.getElementById(id);
  if (turn === 'x' && el.innerHTML == "") {
    el.innerHTML = "X";
    title.innerHTML = `<span>O</span> Turn`;
    turn = 'o';
  } else if(turn === 'o' && el.innerHTML == "") {
    el.innerHTML = "O";
    title.innerHTML = `<span>X</span> Turn`;
    turn = 'x';
  }
  winner();
}

function winner() {
  for (let i = 0; i < 9; i++) {
    arrayOfSquares[i] = document.getElementById(`item${i + 1}`).innerHTML;
  }
  checkRow();
  checkCol();
  checkOther();
}

function result(num1, num2, num3) {
  title.innerHTML = `<span>${arrayOfSquares[num1]}</span> Winner`;
  document.getElementById(`item${num1+1}`).style.backgroundColor = "#000";
  document.getElementById(`item${num2+1}`).style.backgroundColor = "#000";
  document.getElementById(`item${num3+1}`).style.backgroundColor = "#000";
  setInterval(() => {title.innerHTML += '.'}, 1000);
  setTimeout(() => {location.reload()}, 4000);
}

function checkRow() {
  if (arrayOfSquares[0] == arrayOfSquares[1] && arrayOfSquares[1] == arrayOfSquares[2] && arrayOfSquares[0] != "") {
    result(0, 1, 2);
  } else if (arrayOfSquares[3] == arrayOfSquares[4] && arrayOfSquares[4] == arrayOfSquares[5] && arrayOfSquares[3] != "") {
    result(3, 4, 5);
  } else if (arrayOfSquares[6] == arrayOfSquares[7] && arrayOfSquares[7] == arrayOfSquares[8] && arrayOfSquares[7] != "") {
    result(6, 7, 8);
  }
}

function checkCol() {
  if (arrayOfSquares[0] == arrayOfSquares[3] && arrayOfSquares[3] == arrayOfSquares[6] && arrayOfSquares[3] != "") {
    result(0, 3, 6);
  } else if (arrayOfSquares[1] == arrayOfSquares[4] && arrayOfSquares[4] == arrayOfSquares[7] && arrayOfSquares[4] != "") {
    result(1, 4, 7);
  } else if (arrayOfSquares[2] == arrayOfSquares[5] && arrayOfSquares[5] == arrayOfSquares[8] && arrayOfSquares[8] != "") {
    result(2, 5, 8);
  }
  return false;
}

function checkOther() {
  if (arrayOfSquares[0] == arrayOfSquares[4] && arrayOfSquares[4] == arrayOfSquares[8] && arrayOfSquares[4] != "") {
    result(0, 4, 8);
  } else if (arrayOfSquares[2] == arrayOfSquares[4] && arrayOfSquares[4] == arrayOfSquares[6] && arrayOfSquares[4] != "") {
    result(2, 4, 6);
  }
}