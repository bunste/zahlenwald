import { binaryTask } from '../js/task.js';
import { shuffle } from '../js/util.js';

// Hier immer die aktuell zu übenden Aufgaben eintragen.
const TASKS = shuffle([
  // FF blau Seite 4
  // 1
  binaryTask(263, '+', 5, 268),
  binaryTask(763, '+', 5, 768),
  binaryTask(157, '-', 5, 152),
  binaryTask(457, '-', 5, 452),
  binaryTask(495, '+', 8, 503),
  binaryTask(695, '+', 8, 703),
  binaryTask(204, '-', 9, 195),
  binaryTask(504, '-', 9, 495),
  // 2
  binaryTask(570, '+', 200, 770),
  binaryTask(230, '+', 60, 290),
  binaryTask(530, '-', 300, 230),
  binaryTask(890, '-', 50, 840),
  binaryTask(690, '+', 300, 990),
  binaryTask(430, '+', 80, 510),
  binaryTask(680, '-', 200, 480),
  binaryTask(330, '-', 70, 260),
  // 3
  binaryTask(490, '+', 80, 570),
  binaryTask(340, '-', 60, 280),
  binaryTask(780, '-', 50, 730),
  binaryTask(900, '-', 90, 810),
  binaryTask(410, '+', 400, 810),
  binaryTask(370, '+', 400, 770),
  binaryTask(480, '+', 300, 780),
  binaryTask(800, '-', 30, 770),
  binaryTask(820, '-', 90, 730),
  binaryTask(480, '-', 200, 280),
  binaryTask(710, '+', 70, 780),
  binaryTask(620, '-', 50, 570),
  // 4
  binaryTask(370, '+', 80, 450),
  binaryTask(510, '-', 90, 420),
  // 5
  binaryTask(280, '+', 50, 330),
  binaryTask(430, '-', 70, 360)
]);

let index = 0;

export default {
  id: 'training01',
  icon: '💪',
  name: 'Training',
  description: 'Aktuell zu übende Aufgaben',
  title: 'Training',

  generate() {
    const task = TASKS[index % TASKS.length];
    index++;
    return task;
  }
};
