#!/usr/bin/env node
import { runGame } from '../src/index.js';
import { primeGame } from '../games/prime.js';

runGame(primeGame, 'Answer "yes" if given number is prime. Otherwise answer "no".');
