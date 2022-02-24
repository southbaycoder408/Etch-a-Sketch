

const button = document.createElement('button');
button.textContent = "RESET";
document.body.appendChild(button);


//creates div container that will hold square div 16x16 grid 
const container = document.createElement('div');
//adds div to body tag
document.body.appendChild(container);
//add class "container" to container div
container.classList.add('container');




//function that creates 16 "row" elements and 16"square" elements inside that...
//designed this way to make use of flexbox and organization of square
function createSquare() {
    let row = 1;
    for (row; row <= 16; row++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);

        let box = 1;

        for (box; box <= 16; box++) {
            //creates div which will be the squares in container
            const square = document.createElement('div');
            //adds square class to square div
            square.classList.add('square');


            square.textContent = "Square #" + box;
            //adds square div to container 
            row.appendChild(square);
        }
    }
}

createSquare();

const hover = document.querySelectorAll('.square');

hover.forEach((square)=>{
    square.addEventListener('mouseover',(event)=>{
        //highlights the text of each class square to target color
        event.target.style.backgroundColor = "blue";
        //setimeout resets the color back to regular after 5 seconds

        //setTimeout(function (){event.target.style.backgroundColor ="";}, 500);
    })
})
