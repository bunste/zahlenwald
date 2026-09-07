import { binaryTask } from '../js/task.js';
import { randomInt } from '../js/util.js';

export default {
  id: 'subtraction01',
  icon: '➖',
  name: 'Subtraktion (1)',
  description: 'Zahlenraum 1 bis 100',
  title: 'Subtraktion im Zahlenraum 1 bis 100',

  generate() {
    const a = randomInt(2, 100);
    const b = randomInt(1, a - 1);
    return binaryTask(a, '-', b, a - b);
  }
};