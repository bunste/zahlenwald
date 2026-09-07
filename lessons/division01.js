import { binaryTask } from '../js/task.js';
import { randomInt } from '../js/util.js';

export default {
  id: 'division01',
  icon: '➗',
  name: 'Division',
  description: 'Zahlenraum 1 bis 100',
  title: 'Division im Zahlenraum 1 bis 100',

  generate() {
    let a = randomInt(1, 10);
    let b = randomInt(1, 10);

    // Prevents the case 1 : 1 = 1, which is too easy
    while (a === 1 && b === 1) {
      a = randomInt(1, 10);
      b = randomInt(1, 10);
    }

    return binaryTask(a * b, ':', b, a);
  }
};