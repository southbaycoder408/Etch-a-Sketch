//creates div container that will hold square div 16x16 grid 
const container = document.createElement('div');
//adds div to body tag
document.body.appendChild(container);
//add class "container" to container div
container.classList.add('container');



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