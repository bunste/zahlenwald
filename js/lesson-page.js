import { startLesson } from './engine.js';
import { loadLesson } from './lessons.js';

const lessonId = new URLSearchParams(window.location.search).get('lesson');

loadLesson(lessonId)
  .then((lesson) => {
    if (!lesson) {
      showError('Diese Lektion gibt es leider nicht.');
      return;
    }
    startLesson(lesson);
  })
  .catch(() => showError('Die Lektion konnte nicht geladen werden.'));

function showError(text) {
  $('#lessonTitle').text('Hoppla!');
  $('#message').text(text).removeClass('success').addClass('error show');
  $('#checkAnswer, #nextExercise').prop('disabled', true);
}
