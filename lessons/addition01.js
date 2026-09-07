import { binaryTask } from '../js/task.js';
import { randomInt } from '../js/util.js';

export default {
  id: 'addition01',
  icon: '➕',
  name: 'Addition (1)',
  description: 'Zahlenraum 1 bis 100',
  title: 'Addition im Zahlenraum 1 bis 100',

  generate() {
    const a = randomInt(1, 99);
    const b = randomInt(1, 100 - a);
    return binaryTask(a, '+', b, a + b);
  }
};