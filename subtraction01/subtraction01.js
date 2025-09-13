function generateSubtraction() {
  const a = Math.floor(Math.random() * (100 - 2 + 1)) + 2; // 2 bis 100 inkl.
  const b = Math.floor(Math.random() * (a - 1)) + 1; // 1 <= b < a

  return {
    numbers: [a, b],
    operator: '-',
    correctAnswer: a - b
  };
}

$(document).ready(function(){
  startLesson(generateSubtraction);
});