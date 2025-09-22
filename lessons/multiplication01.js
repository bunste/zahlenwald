function generateMultiplication() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;

  return {
    numbers: [a, b],
    operator: 'x',
    correctAnswer: a*b
  };
}

$(document).ready(function(){
  $("#lessonTitle").text("Kleines Einmaleins - Multiplikation");
  startLesson(generateMultiplication);
});