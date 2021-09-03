//select all tictatoe squares
let squares = document.querySelectorAll(".square");
// console.log(squares[0]);
// let 'O' be written first
let xIsNext = false;

// console.log(calculateWinner(squares));

//add event listener to each square selected
squares.forEach((btn) => {
  btn.addEventListener("click", () => {
    //prevent change of a square's marking after clicked once
    if(btn.innerHTML || calculateWinner(squares)) {
      return;
    }
  //take turns writing 'X' and 'O'    
    if(xIsNext) {
    btn.innerHTML = "X";  
    }
    else
      {
        btn.innerHTML = "O";
      }
    xIsNext = !xIsNext;
  })
}
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a].innerHTML && squares[a].innerHTML === squares[b].innerHTML && squares[a].innerHTML === squares[c].innerHTML) {
      return squares[a];
      document.getElementsByClassName("status").innerHTML = "Winner is"+ squares[a]; 
    }
  }
  return null;
}
