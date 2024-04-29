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

    let currentSize = 16; // Store the current grid size
    createGrid(currentSize); // Initialize with a 16x16 grid

    function createGrid(size) {
        container.innerHTML = ''; // Clear existing grid
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `calc(100% / ${size})`; // Dynamic calculation of width
            square.style.height = `calc(100% / ${size})`; // Dynamic calculation of height
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = currentColor; // Apply the selected color on hover
            });
            container.appendChild(square);
        }
    }

    resizeButton.addEventListener('click', function() {
        let newSize = prompt("Enter the number of squares per side for the new grid (max 100):", currentSize);
        newSize = parseInt(newSize);
        if (newSize > 0 && newSize <= 100) {
            currentSize = newSize;
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

    window.addEventListener('resize', () => {
        createGrid(currentSize); // Recreate the grid with the current size to adjust to new container size
    });
});
