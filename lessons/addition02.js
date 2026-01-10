// Zweite Zahl entweder 1-9, 10-90 oder 100-900
function generateAddition() {

  // Schritt 1: Zufällige Zahl zwischen 1 und 9
  const zahl = Math.floor(Math.random() * 9) + 1;

  // Schritt 2: Zufällige Auswahl, ob wir 0, 1 oder 2 Nullen anhängen
  const nullen = Math.floor(Math.random() * 3);

  // Endergebnis
  const a = zahl * Math.pow(10, nullen);

  const b = Math.floor(Math.random() * (1000 - a)) + 1;

  return {
    numbers: [b, a],
    operator: '+',
    correctAnswer: b+a
  };
}

$(document).ready(function(){
  $("#lessonTitle").text("Addition im Bereich 1-1000");
  startLesson(generateAddition);
});