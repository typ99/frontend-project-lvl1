#!/usr/bin/env node

import { rule, $evenGame } from '../src/games/even-game.js';
import startGame from '../src/index.js';

startGame(rule, $evenGame);
