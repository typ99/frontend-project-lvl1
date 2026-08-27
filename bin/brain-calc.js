#!/usr/bin/env node
import { runGame } from '../src/index.js';
import { calcGame } from '../games/calc.js';

runGame(calcGame, 'What is the result of the expression?');
