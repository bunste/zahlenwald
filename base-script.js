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