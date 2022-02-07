import { Circle, Movecircle } from './circle.js'
import { newGame } from './startNewGame.js'
export let projectiles = []
export let ProjectleExplosion = []
let score = document.querySelector('span')
window.scoreCount = 0
export function createProjectiles(e) {
    let x = e.clientX
    let y = e.clientY
    let angle = Math.atan2(y - innerHeight / 2, x - innerWidth / 2);
    let velocity = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5
    }
    let moveProjectle = new Movecircle(innerWidth / 2, innerHeight / 2, 5, 'white', velocity)
    projectiles.push(moveProjectle)
}
export function removeProjectiles(enemies, index, enemy) {
    projectiles.forEach((projectil, i) => {
        if (Math.hypot(enemy.x - projectil.x, enemy.y - projectil.y) -
            enemy.raduis - projectil.raduis < 1) {
            if (enemy.raduis - 5 > 10) {
                enemy.raduis -= 5;
                window.scoreCount += 50
                score.innerHTML = window.scoreCount
            } else {
                enemies.splice(index, 1)
                window.scoreCount += 100
                score.innerHTML = window.scoreCount
            }
            setTimeout(() => {
                projectiles.splice(i, 1)
            }, 0);
            for (let i = 0; i < 10; i++) {
                let angle = Math.atan2(enemy.y - projectil.y,
                        enemy.x - projectil.x) * Math.random() * 2 - 8
                    // let angle = Math.random() * 5 - 5
                let speed = Math.random() - 3
                let velocity = {
                    x: Math.cos(angle) * speed,
                    y: Math.sin(angle) * speed
                };

                let shrinkProjectle = new Movecircle(
                    enemy.x, enemy.y, Math.random() * 3, enemy.color, velocity
                )
                ProjectleExplosion.push(shrinkProjectle)
                shrinkProjectle.alpha -= .2
            }
        }
    });
}