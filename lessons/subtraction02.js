/*
Typ: A - B = C

A zufällig
B 1-9, 10-90, 100-900
C >= 0
*/
function generateSubtraction() {

  // Schritt 1: Zufällige Zahl zwischen 1 und 9
  const zahl = Math.floor(Math.random() * 9) + 1;

  // Schritt 2: Zufällige Auswahl, ob wir 0, 1 oder 2 Nullen anhängen
  const r = Math.random(); // 0 ≤ r < 1
  let nullen;

  if (r < 0.3) { // 30% Chance
    nullen = 0;
  } else if (r < 0.65) { // weitere 35% Chance
    nullen = 1;
  } else { // verbleibende 35% Chance
    nullen = 2;
  }

  // Endergebnis
  const a = zahl * Math.pow(10, nullen);

  const b = Math.floor(Math.random() * (1000 - a)) + 1;

  return {
    numbers: [b+a, a],
    operator: '-',
    correctAnswer: b
  };
}

$(document).ready(function(){
  $("#lessonTitle").text("Subtraktion im Bereich 1-1000");
  startLesson(generateSubtraction);
});