export const ANSWER_ID = 'answer';

export function renderTask(task, $container) {
  $container.empty();
  for (const part of task.parts) {
    $container.append(createPart(part));
  }
}

function createPart(part) {
  switch (part.type) {
    case 'number':
      return $('<span class="task-number"></span>').text(part.value);
    case 'operator':
      return $('<span class="task-operator"></span>').text(part.value);
    case 'equals':
      return $('<span class="task-equals"></span>').text('=');
    case 'text':
      return $('<span class="task-text"></span>').text(part.value);
    case 'input':
      return $('<input>', {
        id: ANSWER_ID,
        type: 'text',
        inputmode: 'numeric',
        autocomplete: 'off'
      });
    default:
      throw new Error(`Unbekannter Aufgabenteil: ${part.type}`);
  }
}
