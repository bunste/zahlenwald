/*
The allow-list of lessons. The `?lesson=` URL parameter is only ever looked up
here, never turned into a script path, so it cannot load arbitrary files.
*/
const LESSON_LOADERS = new Map([
  ['addition01', () => import('../lessons/addition01.js')],
  ['addition02', () => import('../lessons/addition02.js')],
  ['subtraction01', () => import('../lessons/subtraction01.js')],
  ['subtraction02', () => import('../lessons/subtraction02.js')],
  ['multiplication01', () => import('../lessons/multiplication01.js')],
  ['division01', () => import('../lessons/division01.js')]
]);

export const lessonIds = [...LESSON_LOADERS.keys()];

export async function loadLesson(id) {
  const loader = LESSON_LOADERS.get(id);
  if (!loader) {
    return null;
  }
  const module = await loader();
  return module.default;
}

export function loadAllLessons() {
  return Promise.all(lessonIds.map(loadLesson));
}
