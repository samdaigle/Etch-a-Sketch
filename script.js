const TOTAL_WIDTH = 480;
const START_NUM_SQUARES = 16;

const main = document.querySelector("body");
const script = document.querySelector("script");
const container = document.createElement("div");
const header = document.createElement("div");
const btn = document.createElement("button");

header.id = "header";
container.id = "container";

main.insertBefore(container, script);
main.insertBefore(header, container);

header.appendChild(btn);
btn.textContent = "Reset";


btn.addEventListener("click", () => {
    let numSquares = prompt("Set the number of squares: ")
    if (numSquares > 100) {
        alert("Maximum number of squares is 100. Try Again");
    } else {
        removeGrid();
        addGrid(+numSquares);
        setSquareWidth(+numSquares);
        setHover();
    }
})


function setHover() {
    const square = document.querySelectorAll(".square");
    square.forEach( (square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        })
    })
}


function removeGrid() {
    const square = document.querySelectorAll(".square");
    square.forEach((square) => {
        container.removeChild(square);
    })
}


function addGrid(numSquares) {
    const square = document.querySelectorAll(".square");
    totalSquares = numSquares ** 2;
    
    for (let i = 0; i < totalSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.className = "square";
        container.appendChild(newSquare);
    }
}


function setSquareWidth(numSquares) {

    let squareWidth = TOTAL_WIDTH / numSquares;
    const square = document.querySelectorAll(".square");
    square.forEach((square) => {
        square.style.width = squareWidth + "px";
        square.style.height = squareWidth + "px";
    })
}


addGrid(START_NUM_SQUARES);
setHover();

