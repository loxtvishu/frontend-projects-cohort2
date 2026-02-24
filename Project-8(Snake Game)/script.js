const board = document.querySelector(".board");
const blockHeight = 50
const blockWidth = 50

const cols = Math.floor(board.clientWidth / blockWidth)
const rows = Math.floor(board.clientHeight / blockHeight)

const blocks = [];

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement("div")
        block.classList.add("block");
        board.appendChild(block);
        blocks[`${row}-${col}`] = block
    }
}

const snake = [{
    x: 2, y: 3
},
{
    x: 2, y: 4
},
{
    x: 2, y: 5
}]

function render() {
    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.add("fill");

    })
}

setInterval(() => {
    render();
}, 300)

