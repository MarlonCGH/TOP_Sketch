/** @type {HTMLElement | null} */
const grid = document.querySelector(".container");


function makeGrid(row){
 
    for (let i = 0; i < row * row; i++){
        const cell = document.createElement("div");
        const cellSize = 25;
        cell.setAttribute("class", "cell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        grid.style.width = `${row * cellSize}px`;
        grid.style.width = `${row * cellSize}px`;
        cell.textContent = ''
        grid.appendChild(cell);
    }
};
makeGrid(14);