function generateAddition() {
  const a = Math.floor(Math.random() * (1000 - 2 + 1)) + 2; // 2 bis 100 inkl.
  const b = Math.floor(Math.random() * (a - 1)) + 1; // 1 <= b < a

  return {
    numbers: [a-b, b],
    operator: '+',
    correctAnswer: a
  };
}

$(document).ready(function(){
  $("#lessonTitle").text("Addition im Bereich 1-1000");
  startLesson(generateAddition);
});