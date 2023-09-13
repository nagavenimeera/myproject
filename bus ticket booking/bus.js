// Get the button element
const colorButton = document.getElementById('colorButton');

// Function to change the background color
function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33F6', '#33FFF6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Add a click event listener to the button
colorButton.addEventListener('click', changeBackgroundColor);