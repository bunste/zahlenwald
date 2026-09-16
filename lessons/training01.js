import { binaryTask, ternaryTask, number, operator, equals, input } from '../js/task.js';
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
  binaryTask(430, '-', 70, 360),
  // FF blau Seite 5
  // 1
  binaryTask(430, '+', 70, 500),
  binaryTask(360, '+', 80, 440),
  binaryTask(540, '-', 80, 460),
  binaryTask(250, '-', 70, 180),
  // 4a
  binaryTask(510, '+', 80, 590),
  binaryTask(80, '+', 220, 300),
  binaryTask(590, '+', 300, 890),
  // 4b
  binaryTask(140, '+', 330, 470),
  {parts: [number(330), operator('+'), input(), equals(), number(490)], answer: 160},
  {parts: [input(), operator('+'), number(490), equals(), number(960)], answer: 470},
  // 4c
  {parts: [input(), operator('+'), number(270), equals(), number(350)], answer: 80},
  binaryTask(270, '+', 110, 380),
  binaryTask(350, '+', 380, 730),
  // 4d
  {parts: [number(330), operator('+'), input(), equals(), number(610)], answer: 280},
  {parts: [input(), operator('+'), number(610), equals(), number(990)], answer: 380},
  {parts: [input(), operator('+'), number(330), equals(), number(380)], answer: 50},
  // 4e
  {parts: [input(), operator('+'), number(150), equals(), number(260)], answer: 110},
  binaryTask(140, '+', 110, 250),
  binaryTask(250, '+', 260, 510),
  // 4f
  {parts: [number(280), operator('+'), input(), equals(), number(450)], answer: 170},
  binaryTask(170, '+', 190, 360),
  binaryTask(450, '+', 360, 810),
  // 5
  ternaryTask(340, '+', 23, '+', 60, 423),
  ternaryTask(125, '+', 75, '+', 53, 253),
  ternaryTask(473, '+', 15, '-', 73, 415),
  ternaryTask(3, '+', 68, '+', 297, 368),
  ternaryTask(625, '-', 43, '-', 25, 557),
  ternaryTask(35, '+', 426, '+', 65, 526)
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
