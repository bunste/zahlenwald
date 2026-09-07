import { shuffle } from './util.js';

const SUCCESS_MESSAGES = [
  'Super!',
  'Klasse gemacht!',
  'Richtig gut!',
  'Bravo!',
  'Toll gelöst!',
  'Genau richtig!',
  'Du hast es drauf!',
  'Fantastisch!',
  'Sehr gut!',
  'Spitze!',
  'Großartig!',
  'Genial!',
  'Stark gemacht!',
  'Wunderbar!',
  'Hervorragend!',
  'Richtig schlau!',
  'Weltklasse!',
  'Mega!',
  'Du bist spitze!',
  'Prima!',
  'Goldrichtig!',
  'Hammermäßig!',
  'Yeah, geschafft!'
];

const ponies = shuffle([
  'images/pony01.png',
  'images/pony02.png',
  'images/pony03.png',
  'images/pony04.png',
  'images/pony05.png',
  'images/pony06.png',
  'images/pony07.png',
  'images/pony08.png',
  'images/pony09.png'
]);

// Kept referenced so the browser holds on to the decoded images.
const preloadedPonies = ponies.map((src) => {
  const image = new Image();
  image.src = src;
  return image;
});

let ponyIndex = 0;

export function randomSuccessMessage() {
  return SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)];
}

export function showPony($pony) {
  $pony.attr('src', ponies[ponyIndex]).fadeIn();
  ponyIndex = (ponyIndex + 1) % ponies.length;
  if (ponyIndex === 0) {
    shuffle(ponies);
  }
}

export function hidePony($pony) {
  $pony.fadeOut();
}

export function celebrate() {
  if (typeof window.confetti !== 'function') {
    return;
  }
  window.confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.7 }
  });
}
