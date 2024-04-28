document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const resizeButton = document.getElementById('resizeButton');
    const clearButton = document.getElementById('clearButton');
    const colorPicker = document.getElementById('colorPicker');

    let currentColor = colorPicker.value; // Start with the first color in the dropdown
    colorPicker.addEventListener('change', () => {
        currentColor = colorPicker.value; // Update the color when a new one is selected
        clearBoard(); // Automatically clear the board on color change
    });

    createGrid(16); // Initialize with a 16x16 grid

    function createGrid(size) {
        container.innerHTML = ''; // Clear existing grid
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        let squareSize = 960 / size; // Calculate the size of each square to fit in 960px
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.classList.add('square');
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = currentColor; // Apply the selected color on hover
            });
            container.appendChild(square);
        }
    }

    resizeButton.addEventListener('click', function() {
        let newSize = prompt("Enter the number of squares per side for the new grid (max 100):", 16);
        newSize = parseInt(newSize);
        if (newSize > 0 && newSize <= 100) {
            createGrid(newSize);
        } else {
            alert("Please enter a number between 1 and 100.");
        }
    });

    clearButton.addEventListener('click', clearBoard);

    function clearBoard() {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.style.backgroundColor = ''; // Clear the background color
        });
    }
});
