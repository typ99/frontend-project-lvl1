#!/usr/bin/env node

import { rule, $progressionGame } from '../src/games/progression-game.js';
import startGame from '../src/index.js';

startGame(rule, $progressionGame);
