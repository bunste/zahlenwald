import { renderTask, ANSWER_ID } from './render.js';
import { createScore } from './scoring.js';
import { celebrate, hidePony, randomSuccessMessage, showPony } from './rewards.js';

const PONY_EVERY = 5;

function defaultCheck(rawAnswer, task) {
  return Number(rawAnswer) === task.answer;
}

/**
 * Runs a lesson descriptor: owns the task loop, scoring and rewards.
 * A lesson may override `render` or `check`; everything else stays shared.
 */
export function startLesson(lesson) {
  const $task = $('#task');
  const $message = $('#message');
  const $counter = $('#success-counter');
  const $pony = $('#pony');

  const score = createScore();
  const render = lesson.render ?? renderTask;
  const check = lesson.check ?? defaultCheck;

  let currentTask = null;

  $('#lessonTitle').text(lesson.title);
  document.title = `${lesson.title} – Zahlenwald`;

  function nextTask() {
    currentTask = lesson.generate();
    render(currentTask, $task);
    $message.removeClass('show');
    hidePony($pony);
    score.armForNewTask();
  }

  function submitAnswer() {
    const rawAnswer = String($task.find(`#${ANSWER_ID}`).val() ?? '').trim();

    if (rawAnswer === '') {
      $message.removeClass('show');
      return;
    }

    if (check(rawAnswer, currentTask)) {
      celebrate();
      $message.text(randomSuccessMessage()).removeClass('error').addClass('success show');

      if (score.registerCorrect()) {
        if (score.value % PONY_EVERY === 0) {
          showPony($pony);
        }
        $counter.text(score.value).addClass('success show');
      }
    } else {
      $message.text('Versuche es nochmal!').removeClass('success').addClass('error show');
    }
  }

  $('#nextExercise').on('click', nextTask);
  $('#checkAnswer').on('click', submitAnswer);
  // Delegated: the input is recreated for every task.
  $task.on('keyup', `#${ANSWER_ID}`, (event) => {
    if (event.key === 'Enter') {
      submitAnswer();
    }
  });

  nextTask();
}
