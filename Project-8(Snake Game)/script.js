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
const PositionX = Math.floor(Math.random() * rows);
const PositionY = Math.floor(Math.random() * (cols - 3));
const snake = [{
    x: PositionX, y: PositionY
},
{
    x: PositionX, y: PositionY + 1
},
{
    x: PositionX, y: PositionY + 2
}]

let snakeFood = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
}

let direction = 'left'
function render() {
    let head = null
    if (direction === 'left') {
        head = { x: snake[0].x, y: snake[0].y - 1 }
    } else if (direction === 'right') {
        head = { x: snake[0].x, y: snake[0].y + 1 }
    } else if (direction === 'up') {
        head = { x: snake[0].x - 1, y: snake[0].y }
    } else if (direction === 'down') {
        head = { x: snake[0].x + 1, y: snake[0].y }
    }
    blocks[`${snakeFood.x}-${snakeFood.y}`].classList.add('food');
    
    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
        alert("Game Over!");
        clearInterval(intervalID);
    }

    if (head.x == snakeFood.x && head.y == snakeFood.y) {
        blocks[`${snakeFood.x}-${snakeFood.y}`].classList.remove("food");
        snakeFood = {
            x: Math.floor(Math.random() * rows),
            y: Math.floor(Math.random() * cols),
        }
        blocks[`${snakeFood.x}-${snakeFood.y}`].classList.add('food');
    }
    snake.unshift(head);
    snake.forEach(segment => {
        const block = blocks[`${segment.x}-${segment.y}`];
        if (block) {
            block.classList.remove("fill");
        }
    })
    snake.pop();
    snake.forEach(segment => {
        const block = blocks[`${segment.x}-${segment.y}`];
        if (block) {
            block.classList.add("fill");
        }
    })

}

let intervalID = null
intervalID = setInterval(() => {
    render();
}, 300)


addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        direction = "up";
    } else if (event.key === "ArrowDown") {
        direction = "down";
    } else if (event.key === "ArrowRight") {
        direction = "right"
    } else if (event.key === "ArrowLeft") {
        direction = "left"
    }

});
