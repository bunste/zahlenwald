const successMessages = [
  "Super!",
  "Klasse gemacht!",
  "Richtig gut!",
  "Bravo!",
  "Toll gelöst!",
  "Genau richtig!",
  "Du hast es drauf!",
  "Fantastisch!",
  "Sehr gut!",
  "Spitze!"
];

function getRandomSuccessMessage() {
  const index = Math.floor(Math.random() * successMessages.length);
  return successMessages[index];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];   // swap elements
  }
  return array;
}
