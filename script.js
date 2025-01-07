const container = document.querySelector(".container");
const gridBtn = document.querySelector(".gridBtn");

let gridNumb = 16;

function displayGrid(gridNumb){
    for(let i = 0; i < (gridNumb * gridNumb); i++){
        const square = document.createElement("div");
        square.setAttribute("class", "grid_square");
        square.style.width = `${100/gridNumb}%`;
        square.style.height = `${100/gridNumb}%`;
        container.appendChild(square);
    } 
}

displayGrid(gridNumb);

gridBtn.addEventListener("click",()=>{
    let userInput = parseInt(prompt("Please enter number of squares per side of grid", gridNumb));
    if(userInput > 100){
        alert("The Maximum Number of squares per side is 100, Please try again")
    }
    else{
        gridNumb = userInput;
    }
});


