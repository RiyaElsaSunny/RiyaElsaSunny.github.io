// Function to create a chessboard
function createChessboard(rows, cols) {
    const boardContainer = document.getElementById('chessboard-container');
   
    // Loop through rows
    for (let i = 0; i < rows; i++) {
        // Loop through columns
        for (let j = 0; j < cols; j++) {
            // Create a square element
            const square = document.createElement('div');
            square.className = (i + j) % 2 === 0 ? 'square light' : 'square dark'; // Alternate colors
            square.textContent = ''; // You can set text content or piece icons here
           
            // Append square to the board container
            boardContainer.appendChild(square);
        }
    }
}
 
// Call the function with desired rows and columns
createChessboard(8, 8); // This will create an 8x8 chessboard
 