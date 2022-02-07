import { Movecircle } from './circle.js';
import { player, animation } from './script.js'
import { projectiles, removeProjectiles, } from './projectiles.js'
import { startGame } from './startNewGame.js'
export let enemies = []
export let gameover = false;
export function createenemies() {
    setInterval(() => {
        let x;
        let y
        let raduis = Math.random() * 25 + 5
        if (Math.random() < .5) {
            x = Math.random() < .5 ? 0 - raduis : innerWidth + raduis;
            y = Math.random() * innerHeight;
        } else {
            x = Math.random() * innerWidth;
            y = Math.random() < .5 ? 0 - raduis : innerHeight + raduis;
        }
        let angle = Math.atan2(innerHeight / 2 - y, innerWidth / 2 - x);
        let velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }
        let color = `hsl(${Math.random()*360},50%,50%)`
        let circlesMoves = new Movecircle(x, y, raduis, color, velocity)
        enemies.push(circlesMoves)
    }, 1000);
}
export function enemiesHit() {
    enemies.forEach((enemy, index) => {
        enemy.move()
        removeProjectiles(enemies, index, enemy)
        if (Math.hypot(enemy.x - player.x, enemy.y - player.y) - enemy.raduis - player.raduis < 1) {
            setTimeout(() => {
                enemies.splice(index, 1)
            }, 0);
            gameover = true
            document.querySelector('.gameOver').style.transform = 'translate(-50%,-50%)'
            document.querySelector('h1').innerHTML = `${window.scoreCount}`
            document.querySelector('button').addEventListener('click', function() {
                gameover = false
                startGame()
            })
        }
    });
}