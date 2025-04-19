//todos:
/*
- add dynamic grid (also dynamic sliderRange value)
- add reset
- add eraser
- add contrasting border for each box when colored.
- 

*/

let isMouseDown = 0;
document.body.onmousedown = (e) => {
    isMouseDown = 1;
};
document.body.onmouseup = (e) => {
    isMouseDown = 0;
};
document.body.onclick = () => {
    isMouseDown = 0;
};

let nBox1 = 25;
let isEraserActive = false;
let isRainbow = 0;
let curColor = '#000000';

const gridContent = document.querySelector(".gridContent");

let gridWidth = (+gridContent.offsetWidth) - 6;
let gridHeight = (+gridContent.offsetHeight) - 6;

function initializeGrid(nBox) {
    for (let i = 0; i < (nBox*nBox); i++) {
        const smallGrid = document.createElement('div');
        smallGrid.style.width= `${gridWidth/nBox}px`;
        smallGrid.style.height= `${gridHeight/nBox}px`;
        smallGrid.style.backgroundColor= "white";
        smallGrid.style.border= "1px solid black";
        smallGrid.id = `box${-i}`;
        gridContent.appendChild(smallGrid);
    }    
}

initializeGrid(25);

function deleteGrid() {
    gridContent.textContent = '';
}

gridContent.addEventListener('mouseover', (e) =>{
    if(isMouseDown){
        if(!isEraserActive){
            if(!isRainbow){
                e.target.style.backgroundColor = curColor;
            }
            else{
                curColor = getRandomColor();
                e.target.style.backgroundColor = curColor;
            }
        }
        else{
            e.target.style.backgroundColor = 'white';
        }
    }
})

gridContent.addEventListener('mousedown', (e) => {
    if(!isEraserActive){
        if(!isRainbow){
            e.target.style.backgroundColor = curColor;
        }
        else{
            curColor = getRandomColor();
            e.target.style.backgroundColor = curColor;
        }
    }
    else{
        e.target.style.backgroundColor = 'white';
    }
})

const gridMenus = document.querySelector(".gridMenus");

gridMenus.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'button-reset':            
            Array.from(gridContent.children).forEach((gridBox) => {
                gridBox.style.backgroundColor = 'white';
            });
            break;        
        case 'button-eraser':
            isEraserActive = !isEraserActive;
            e.target.classList.toggle("activeButton");
            break;
        case 'button-rainbow':
            isRainbow = !isRainbow;
            curColor = '#000000';
            e.target.classList.toggle("activeButton");
            break;
        default:
            break;
    }
});

const sliderGrid = document.querySelector('#slider-grid');
const sliderValue = document.querySelector('#sliderValue');


sliderGrid.addEventListener('input', (e) => {
    sliderValue.textContent = e.target.value;
    deleteGrid();
    initializeGrid(e.target.value);
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}