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
    let newSize = prompt("How big a board? Enter a number between 2 and 100", 16)

    if (newSize !== int) {
        "Please input a number between 2 and 100 using integers";
    } else if (newSize <2 || newSize >100) {
        "Number is outside of bounds, try again!";
    } else {
        alert("Hurray!");
    }

}
gridSize.addEventListener('click', setGridSize);