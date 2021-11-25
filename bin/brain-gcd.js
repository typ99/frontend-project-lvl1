#!/usr/bin/env node

import { rule, $gcdGame } from '../src/games/gcd-game.js';
import startGame from '../src/index.js';

startGame(rule, $gcdGame);
