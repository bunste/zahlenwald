import { loadAllLessons } from './lessons.js';

loadAllLessons().then((lessons) => {
  const $list = $('.lessons');
  for (const lesson of lessons) {
    const $card = $('<a class="lesson-card"></a>')
      .attr('href', `lesson.html?lesson=${encodeURIComponent(lesson.id)}`);
    $('<h2></h2>').text(`${lesson.icon} ${lesson.name}`).appendTo($card);
    $('<p></p>').text(lesson.description).appendTo($card);
    $list.append($card);
  }
});
