import { projectiles } from './projectiles.js'
import { itemCanv, canvas, Circle, Movecircle } from './circle.js';
import { animation } from './script.js'
import { enemies } from './enemies.js'
export let newGame = false
export function startGame() {
    window.scoreCount = 0
    requestAnimationFrame(animation)
    document.querySelector('h1').innerHTML = window.scoreCount
    document.querySelector('.score span').innerHTML = window.scoreCount
    document.querySelector('.gameOver').style.transform = 'translate(-50%,-1000%)';
    canvas.save()
        // canvas.fillRect(0, 0, itemCanv.width, itemCanv.height)
        // canvas.fillStyle = 'rgba(0,0,0, 1)';
        // canvas.fillStyle = 'rgba(0,50,0,.08)'
        // canvas.fillRect(0, 0, innerWidth, innerHeight)
        // canvas.restore()

    enemies.length = 0;
    projectiles.length = 0

}