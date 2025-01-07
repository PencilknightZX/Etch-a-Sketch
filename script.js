const container = document.querySelector(".container");
const gridBtn = document.querySelector(".gridBtn");

let gridNumb = 16;
const square_rgba_values = [];

//Takes an input to set number of squares to be added to the container
function displayGrid(gridNumb){
    for(let i = 0; i < (gridNumb * gridNumb); i++){
        const square = document.createElement("div");
        square.setAttribute("class", "grid_square");
        square.style.width = `${100/gridNumb}%`;
        square.style.height = `${100/gridNumb}%`;
        
        square.addEventListener("click", ()=>{
            //Gets index of square
            const index = Array.from(container.children).indexOf(square);
            
            //Get the corresponding rgba values based on the index position
            let red = square_rgba_values[index]["red"];
            let green = square_rgba_values[index]["green"]
            let blue = square_rgba_values[index]["blue"];
            let alpha = square_rgba_values[index]["alpha"];

            if(alpha === 0){
                //Set RGBA Values to a Random Number Between 0 - 255
                red = Math.floor(Math.random() * 256);
                green = Math.floor(Math.random() * 256);
                blue = Math.floor(Math.random() * 256);
                alpha += 0.1;

                //update the square's RGB values in the array
                square_rgba_values[index]["red"] = red;
                square_rgba_values[index]["green"] = green;
                square_rgba_values[index]["blue"] = blue;
            }
            else if(alpha > 0 && alpha < 1){
                alpha += 0.1;
            }
            else{
                alpha = 0;
            }
            //Update the square's Alpha value in the array
            square_rgba_values[index]["alpha"] = alpha;

            square.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        });
        square_rgba_values.push({red: 0, green: 0, blue: 0, alpha: 0});
        container.appendChild(square);
    } 
}

function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }  
}

displayGrid(gridNumb);

gridBtn.addEventListener("click",()=>{
    let userInput = parseInt(prompt("Please enter number of squares per side of grid", gridNumb));
    if(userInput > 100){
        alert("The Maximum Number of squares per side is 100, Please try again")
    }
    else{
        clearGrid();
        displayGrid(gridNumb = userInput);
    }
});
