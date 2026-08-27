#!/usr/bin/env node
import { runGame } from '../src/index.js';
import { gcdGame } from '../games/gcd.js';

runGame(gcdGame, 'Find the greatest common divisor of given numbers.');
