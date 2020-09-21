import {Game} from './scripts/game-engine/game.js';
import {Paddle} from './scripts/game/Paddle.js';


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
    
    startGame(1);
    
    
});


function startGame(players){
    buttonsList.style.display = 'none';
    Game.start();

    const paddle = new Paddle();
    const paddle2 = new Paddle('right');

    Game.addObject(paddle);
    Game.addObject(paddle2);


    paddle.update = function(){
        if(this.input.onKey(this.input.key.W)){
            this.goUp();
        }

        if(this.input.onKey(this.input.key.S)){
            this.goDown();
        }
    }

    paddle2.update = function(){
        if(this.input.onKey(this.input.key.UP)){
            this.goUp();
        }

        if(this.input.onKey(this.input.key.DOWN)){
            this.goDown();
        }
    }

}