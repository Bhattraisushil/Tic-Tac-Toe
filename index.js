let boxes = document.querySelectorAll('.box');
let reset = document.getElementById('reset-btn');


 const box = document.querySelectorAll('.box');
        const resetButton = document.getElementById('reset-btn');
        let currentPlayer = 'X';
        let gameActive = true;
        const winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        function handleBoxClick(event) {
            const box = event.target;
            if (box.textContent || !gameActive) return;

            box.textContent = currentPlayer;
            checkWin();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }

        function checkWin() {
            for (const condition of winningConditions) {
                const [a, b, c] = condition;
                if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
                    alert(`${boxes[a].textContent} wins!`);
                    gameActive = false;
                    return;
                }
            }
            if ([...boxes].every(box => box.textContent)) {
                alert("It's a draw!");
                gameActive = false;
            }
        }

        function resetGame() {
            boxes.forEach(box => box.textContent = '');
            currentPlayer = 'X';
            gameActive = true;
        }

        boxes.forEach(box => box.addEventListener('click', handleBoxClick));
        resetButton.addEventListener('click', resetGame);

        // let turnX = true;

// const winningConditions = [
//     [0,1,2], [3,4,5], [6,7,8], [0,3,6], [0,4,8], [1,4,7]
// , [2,5,8], [2,4,6]
// ]

// boxes.forEach((box) => 
// {
//        box.addEventListener("click", () =>{
//         console.log("the box is clicked");
//         if(turnX){
//             box.innerText = "X";
//             turnX = false;
//         }
//         else{
//             box.innerText = "O";
//             turnX = true;
//         }
//        })
// })