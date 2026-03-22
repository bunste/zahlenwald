function generateMultiplication() {
  let a = 0;
  let b = 0;

  a = Math.floor(Math.random() * 10) + 1;
  b = Math.floor(Math.random() * 10) + 1;

  // Prevents the case 1 x 1 = 1, which is too easy
  while (a === 1 && b === 1) {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
  }

  return {
    numbers: [a, b],
    operator: 'x',
    correctAnswer: a*b
  };
}

$(document).ready(function(){
  $("#lessonTitle").text("Multiplikation im Zahlenraum 1 bis 100");
  startLesson(generateMultiplication);
});