const textInput = document.getElementById("textInput");
const addButton = document.getElementById("addButton");
const container = document.getElementById("container");

addButton.addEventListener("click", 
function() {
    // Input value
    const inputValue2 = textInput.value;

    // creating h1
    const newH2 = document.createElement("h2");
    newH2.textContent = inputValue2;

    // appendchild
    container.appendChild(newH2);

    // delete after write
    textInput.value = "";
});