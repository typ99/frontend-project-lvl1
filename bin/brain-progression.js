#!/usr/bin/env node
import { runGame } from '../src/index.js';
import { progressionGame } from '../games/progression.js';

runGame(progressionGame, 'What number is missing in the progression?');
