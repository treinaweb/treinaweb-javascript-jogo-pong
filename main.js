import {Game} from './scripts/game-engine/game.js';


const p1Button = document.querySelector('#player1');
const p2Button = document.querySelector('#player2');
const buttonsList = document.querySelector('.buttons-list');


p1Button.addEventListener('click', () => startGame(1));
p2Button.addEventListener('click', () => startGame(2));


Game.constructor();
Promise.all([
    Game.SoundManager.loadAll([]),
    Game.ImageManager.loadAll([])
])
.then(() => {
    buttonsList.style.display = 'flex';
    
    
});


function startGame(players){
    buttonsList.style.display = 'none';
    Game.start();
}