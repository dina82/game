import { itemCanv, canvas, Circle, Movecircle } from './circle.js';
import { projectiles, createProjectiles, removeProjectiles, ProjectleExplosion } from './projectiles.js'
import { enemies, createenemies, enemiesHit, gameover } from './enemies.js'
window.addEventListener('resize', function() {
    itemCanv.width = window.innerWidth;
    itemCanv.height = window.innerHeight;
    init()
})
export let player;

function init() {
    player = new Circle(innerWidth / 2, innerHeight / 2, 15, 'white')
    setTimeout(() => {
        createenemies()
    }, 2000);
}
init()
document.addEventListener('click', createProjectiles)
animation()

export function animation() {
    let cancleAnimat = requestAnimationFrame(animation)
    canvas.fillStyle = 'rgba(0,0,0,.08)'
    canvas.fillRect(0, 0, innerWidth, innerHeight)
    player.drawCircle()
    ProjectleExplosion.forEach(item => {
        if (item.alpha > 0) {
            item.move()
        }
    });
    enemiesHit()
    if (gameover) {
        cancelAnimationFrame(cancleAnimat)
    }
    projectiles.forEach(projectil => {
        projectil.move()
    });
}
export function startGame() {
    requestAnimationFrame(animation)
    document.querySelector('h1').innerHTML = 0
    document.querySelector('.score span').innerHTML = 0
    document.querySelector('.gameOver').style.transform = 'translate(-50%,-1000%)';
    enemies.length = 0;
    projectiles.length = 0
}