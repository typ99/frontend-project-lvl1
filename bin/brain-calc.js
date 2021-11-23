#!/usr/bin/env node

import { rule, $calcGame } from '../src/games/calc-game.js';
import startGame from '../src/index.js';

startGame(rule, $calcGame);
