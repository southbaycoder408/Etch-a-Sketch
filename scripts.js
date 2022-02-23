//creates div container to hold square div 16x16 grid 
const container = document.createElement('div');
//adds div to body tag
document.body.appendChild(container);
//add class "container" to container div
container.classList.add('container');

function createSquare() 
{
    let i = 0;
    for(i; i<256; i++){
    //creates div which will be the squares in container
    const square = document.createElement('div');
    //adds square class to square div
    square.classList.add('square');
    square.style.border = "1px solid black";
    square.style.padding = "5px 5px 5px";
    //adds square div to container 
    container.appendChild(square);
    }
}

createSquare();