let nBox = 3;

const gridContent = document.querySelector(".gridContent");


let gridWidth = (+gridContent.offsetWidth) - 6;
let gridHeight = (+gridContent.offsetHeight) - 6;

for (let i = 0; i < (nBox*nBox); i++) {
    const smallGrid = document.createElement('div');
    smallGrid.style.width= `${gridWidth/nBox}px`;
    smallGrid.style.height= `${gridHeight/nBox}px`;
    smallGrid.style.backgroundColor= "aqua";
    smallGrid.style.border= "1px solid black";
    gridContent.appendChild(smallGrid);
}
