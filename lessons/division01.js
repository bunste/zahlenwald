function generateDivision() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;

  return {
    numbers: [a*b, b],
    operator: ':',
    correctAnswer: a
  };
}

$(document).ready(function(){
  $("#lessonTitle").text("Kleines Einmaleins - Division");
  startLesson(generateDivision);
});