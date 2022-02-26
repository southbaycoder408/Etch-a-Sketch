const button = document.createElement('button');
button.textContent = "RESET";
document.body.appendChild(button);

let squarePerSide;

button.addEventListener('click', () => {
    allSquare.forEach((square) => {
        square.style.backgroundColor = "";

    })
    squarePerSide = prompt("Please input the the # of squares per side for new canvas");
    Number(squarePerSide);
    console.log(squarePerSide);
    createSquare();
});

//creates div container that will hold square div 16x16 grid 
const container = document.createElement('div');
//adds div to body tag
document.body.appendChild(container);
//add class "container" to container div
container.classList.add('container');

//function that creates 16 "row" elements and 16"square" elements inside that...
//designed this way to make use of flexbox and organization of square
function createSquare() {

    let row = 0;
    Number(squarePerSide);

    if (squarePerSide === undefined) { //condition guarentees the default canvas size is 16x16 square
        for (row; row <= 15; row++) {
            const row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);

            let box = 1;

            for (box; box <= 16; box++) {
                //creates div which will be the squares in container
                const square = document.createElement('div');
                //adds square class to square div
                square.classList.add('square');

                //adds square div to container 
                row.appendChild(square);
            }
        }
    } else if (squarePerSide == 0) {
        alert("Please choose a number greater than 0!");
    } else {
        const allRow = document.getElementsByClassName('row');
        while (allRow[0]) {
            allRow[0].parentNode.removeChild(allRow[0]);
        }
        for (row; row <= (squarePerSide - 1); row++) {
            const row = document.createElement('div');
            row.classList.add('row');
            container.appendChild(row);

            let box = 1;

            for (box; box <= (squarePerSide); box++) {
                //creates div which will be the squares in container
                const square = document.createElement('div');
                //adds square class to square div
                square.classList.add('square');


                //square.textContent = "Square #" + box;

                //adds square div to container 
                row.appendChild(square);
            }
        }
        //after conditions are met and squares are made, this is same as below and sets up event listener for squares
        const allSquare = document.querySelectorAll('.square');
        allSquare.forEach((square) => {
            square.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = "blue";
            })
        });
    }

}

createSquare();

//creates variable that stores nodelist of "square" classes
const allSquare = document.querySelectorAll('.square');
//colors squares with event listener
allSquare.forEach((square) => {
    square.addEventListener('mouseover', (event) => {
        //highlights the text of each class square to target color
        event.target.style.backgroundColor = "blue";
        //setimeout resets the color back to regular after 5 seconds
        //setTimeout(function (){event.target.style.backgroundColor ="";}, 500);
    })
});

// const highlightFn = function (event) {
//     //highlights the text of each class square to target color
//     event.target.style.backgroundColor = "blue";
//     //setimeout resets the color back to regular after 5 seconds

//     //setTimeout(function (){event.target.style.backgroundColor ="";}, 500);
// };



// const callbackFn = function(square) {
//     square.addEventListener('mouseover', highlightFn);
// };

// const highlightFn = (square) => {
//     square.addEventListener('mouseover', (event) => {
//         //highlights the text of each class square to target color
//         event.target.style.backgroundColor = "blue";
//         //setimeout resets the color back to regular after 5 seconds

//         //setTimeout(function (){event.target.style.backgroundColor ="";}, 500);
//     })
// };