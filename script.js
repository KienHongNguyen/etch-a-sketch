document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const totalSquares = 16 * 16;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.addEventListener('mouseover', function() {
            this.classList.add('hovered');
        });
        container.appendChild(square);
    }
});
