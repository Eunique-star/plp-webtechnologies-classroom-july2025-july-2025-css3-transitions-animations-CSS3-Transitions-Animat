// PART 2

// This first example takes parameters and returns a value.
function calculateArea(length, width) { // length and width are parameters
    let area = length * width; // area is a local variable scope. It will be accessed only within this function.
    return area; // returning the value of area
}

// This second example is a simple web application that takes user input and provides feedback based on button clicks.
// It demonstrates the use of functions with parameters, scope awareness and DOM manipulation.
const responseBox = document.getElementById("responseBox"); // This is a global variable scope. It will be accessed by the functions below.

function positive(){
    let userName = document.getElementById("userName").value; // This is a local variable scope. It will be accessed only within this function.
    let remark = "That's great to hear! Keep it up, " + userName + "!"; // This is a local variable scope. It will be accessed only within this function.
    if (userName === "") {
        remark = "Could you please tell me your name?";
    }
    responseBox.innerText = remark; // Using the global variable (responseBox) here.
    responseBox.style.backgroundColor = "green";
    responseBox.style.display = "block";
}

function negative(){
    let userName = document.getElementById("userName").value; // This is a local variable scope. It will be accessed only within this function.
    let remark = "I'm sorry to hear that, " + userName + ". Hope things get better!"; // This is a local variable scope. It will be accessed only within this function.
    if (userName === "") {
        remark = "Could you please tell me your name?";
    }
    responseBox.innerText = remark; // Using the global variable (responseBox) here.
    responseBox.style.backgroundColor = "red";
    responseBox.style.display = "block";
}

// PART 3
document.getElementById("animateCircleBtn").addEventListener("click", function() {
    const circle = document.getElementById("circle");
    // Remove animation if already running
    circle.style.animation = "none";
    // Force reflow to restart animation
    void circle.offsetWidth;
    // Add animation
    circle.style.animation = "moveCircle 4s linear alternate";
});
