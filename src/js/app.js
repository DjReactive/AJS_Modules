/* не получилось уложить уложиться в один импорт, не понял как */
import {default as loadGame} from './game.js';
import * as saveGame from './game.js';

const game = new Game();
game.start();
