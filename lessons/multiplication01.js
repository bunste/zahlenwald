import { binaryTask } from '../js/task.js';
import { randomInt } from '../js/util.js';

export default {
  id: 'multiplication01',
  icon: '✖️',
  name: 'Multiplikation',
  description: 'Zahlenraum 1 bis 100',
  title: 'Multiplikation im Zahlenraum 1 bis 100',

  generate() {
    let a = randomInt(1, 10);
    let b = randomInt(1, 10);

    // Prevents the case 1 x 1 = 1, which is too easy
    while (a === 1 && b === 1) {
      a = randomInt(1, 10);
      b = randomInt(1, 10);
    }

    return binaryTask(a, 'x', b, a * b);
  }
};