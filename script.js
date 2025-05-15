/** @type {HTMLElement | null} */
const grid = document.querySelector(".container");
const cellSize = 40;

function makeGrid(row){
    const gridSize = 800;
   
    // grid.setAttribute("style", "width: 800 px");
    // grid.setAttribute("style", "height: 800 px");

    
    for (let i = 0; i < row * row; i++){
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.offsetWidth = cellSize;
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        grid.style.width = `${row * cellSize}px`;
        grid.style.width = `${row * cellSize}px`;
        cell.textContent = "test"
        grid.appendChild(cell);
    }
};
makeGrid(3);