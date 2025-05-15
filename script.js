/** @type {HTMLElement | null} */
const grid = document.querySelector(".container");

function makeGrid(row){
    const gridSize = 800;
    const cellSize = gridSize / row;
    grid.setAttribute("style", "width: 800 px");
    grid.setAttribute("style", "height: 800 px");

    
    for (let i = 0; i < row * row; i++){
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        // cell.setAttribute("style", "width; `${cellsize}px`");
        cell.style.width = "40 px";
        cell.style.height = "40 px";
        cell.textContent = "testing this div"
        grid.appendChild(cell);
    }
};
makeGrid(3);