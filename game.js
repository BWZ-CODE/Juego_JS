const canvas = document.querySelector('.game');
const game = canvas.getContext('2d');


window.addEventListener('load', startGame)

function startGame(){
    game.fillRect(10,10,150,15);
    game.fillRect(50,10,15,150);
    game.filltext(ada)
    game.clearRect(0,0,0,0);
}
