// Color Array by Mr.V

//Variables for HTML Elements
let containerEl = document.getElementById("container");
let inputEl = document.getElementById("color-in");

// Global Varaible
let colors = [];

// Fetch content from colors.txt
fetch("colors.txt").then(convertData).then(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(stringData) {
    colors = stringData.split(/\r?\n/);
    console.log(colors);
    displayColors(colors);
}


// Event Listener
inputEl.addEventListener("keydown", submitHandler);

function submitHandler(event) {
    if(event.keyCode === 13){
        // Add user's color to colors array and display 
        colors.push(inputEl.value);
        inputEl.value = "";
        displayColors(colors);
    }
}

function displayColors(colors){
// Display all colors on page
let divStr = "";
for(let i = 0; i < colors.length; i++){
    divStr += `<div style="background: ${colors[i]}"></div>`;
}
containerEl.innerHTML = divStr;
}






