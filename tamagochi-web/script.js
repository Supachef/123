const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 600;

// Персонаж
const tamagochi = {
    x: canvas.width / 2 - 25,
    y: canvas.height / 2 - 25,
    width: 50,
    height: 50,
    color: '#FFD700',
    hunger: 100,
    happiness: 100,
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

// Игровой цикл
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Рисуем персонажа
    tamagochi.draw();

    // Уменьшение параметров (например, голода)
    tamagochi.hunger -= 0.05;
    tamagochi.happiness -= 0.03;

    // Отображаем текст
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '20px Arial';
    ctx.fillText(`Hunger: ${Math.max(0, Math.floor(tamagochi.hunger))}`, 10, 20);
    ctx.fillText(`Happiness: ${Math.max(0, Math.floor(tamagochi.happiness))}`, 10, 50);

    requestAnimationFrame(gameLoop);
}

// Начинаем игру
gameLoop();

// Управление (пополнение ресурсов)
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        tamagochi.hunger = Math.min(100, tamagochi.hunger + 10);
    } else if (event.key === 'ArrowRight') {
        tamagochi.happiness = Math.min(100, tamagochi.happiness + 10);
    }
});
