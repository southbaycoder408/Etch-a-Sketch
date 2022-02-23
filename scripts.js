//creates div container to hold square div 16x16 grid 
const container = document.createElement('div');
//adds div to body tag
document.body.appendChild(container);
//add class "container" to container div
container.classList.add('container');


//creates div which will be the squares in container
const square = document.createElement('div');
//adds to 
container.appendChild(square);