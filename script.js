/** @type {HTMLElement | null} */
const grid = document.querySelector(".container");
const gridSize = document.querySelector("#changesize");

function makeGrid(row){
 
    for (let i = 0; i < row * row; i++){
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.style.width = `${800 / row}px`;
        cell.style.height = `${800 / row}px`;
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
        grid.replaceChildren();
/*  This was my initial answer, found the other one and I think its better? 
      while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }; */
        makeGrid(newSize);
    }  else if (newSize <= 2 || newSize >= 100) {
        alert("That's an integer outside of restrction.")
    } else {
        alert("That's not a number nor number in numerical form")
    };
};
gridSize.addEventListener('click', setGridSize);
