#!/usr/bin/env node

import { rule, $primeGame } from '../src/games/prime-game.js';
import startGame from '../src/index.js';

startGame(rule, $primeGame);
