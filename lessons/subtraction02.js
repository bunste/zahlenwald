import { binaryTask } from '../js/task.js';
import { randomInt } from '../js/util.js';

// Picks a "round" subtrahend: 1-9, 10-90 or 100-900.
function roundNumber() {
  const digit = randomInt(1, 9);
  const r = Math.random();
  const zeros = r < 0.3 ? 0 : r < 0.65 ? 1 : 2;
  return digit * Math.pow(10, zeros);
}

export default {
  id: 'subtraction02',
  icon: '➖',
  name: 'Subtraktion (2)',
  description: 'Zahlenraum 1 bis 1000',
  title: 'Subtraktion im Zahlenraum 1 bis 1000',

  generate() {
    const a = roundNumber();
    const b = randomInt(1, 1000 - a);
    return binaryTask(b + a, '-', a, b);
  }
};