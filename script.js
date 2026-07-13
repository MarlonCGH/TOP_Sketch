/** @type {HTMLElement | null} */
const grid = document.querySelector(".container");
const gridSize = document.querySelector("#changesize");

function makeGrid(row){
 
    for (let i = 0; i < row * row; i++){
        const cell = document.createElement("div");
        const cellSize = 25;
        cell.setAttribute("class", "cell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        grid.style.width = `${row * cellSize}px`;
        cell.textContent = ''
        cell.addEventListener('mouseover', ()=> {
            cell.style.backgroundColor = "black";
        });
        grid.appendChild(cell);
    }
};
makeGrid(16);

function setGridSize(){
    let newSize = parseInt(prompt("How big a board? Enter a number between 2 and 100", 16));

    if (Number.isInteger(newSize) && newSize >= 2 && newSize <= 100) {
        console.log("That's an intege within the restriction!");
    }  else if (newSize <= 2 || newSize >= 100) {
        console.log("That's an integer outside of restrction.")
    } else {
        console.log("That's not a number in numerical form")
    };
};
gridSize.addEventListener('click', setGridSize);