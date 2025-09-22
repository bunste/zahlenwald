// Setting up some state
let ponyIndex = 0;
let countingEnabled = true;
let successCounter = 0;

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
  "Spitze!",
  "Großartig!",
  "Genial!",
  "Stark gemacht!",
  "Wunderbar!",
  "Hervorragend!",
  "Richtig schlau!",
  "Weltklasse!",
  "Mega!",
  "Du bist spitze!",
  "Prima!",
  "Goldrichtig!",
  "Hammermäßig!",
  "Yeah, geschafft!"
];

function getRandomSuccessMessage() {
  const index = Math.floor(Math.random() * successMessages.length);
  return successMessages[index];
}

const ponies = shuffle([
  'images/pony01.png',
  'images/pony02.png',
  'images/pony03.png',
  'images/pony04.png',
  'images/pony05.png',
  'images/pony06.png',
  'images/pony07.png',
  'images/pony08.png'
]);
const preloadedImages = [];
$.each(ponies, function(index, src) {
  const img = new Image();
  img.src = src;
  preloadedImages.push(img);
});

function showPony() {
  const ponyImg = $('#pony');
  ponyImg.attr('src', ponies[ponyIndex]).fadeIn();
  ponyIndex = (ponyIndex+1) % ponies.length;
  if (ponyIndex === 0) {
    shuffle(ponies);
  }
}

function renderTask(task) {
  $('#numA').text(task.numbers[0]);
  $('#numB').text(task.numbers[1]);
  $('#operator').text(task.operator);
  $('#answer').val('');
  $('#message').removeClass('show');
  $('#pony').fadeOut();

  countingEnabled = true;
}

function checkAnswer(task) {
  console.log(task);
  const answerStr = $('#answer').val().trim();

  if(answerStr === "") {
    $('#message').removeClass('show');
    return;
  }

  const userAnswer = Number(answerStr);

  if(userAnswer === task.correctAnswer) {
    // Show confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 }
    });

    if (countingEnabled) {
      countingEnabled = false;
      successCounter += 1;
      if (successCounter % 5 === 0) {
        showPony();
      }
      const message = getRandomSuccessMessage();
      $('#message').text(message).removeClass('error').addClass('success show');
      $('#success-counter').addClass('success show').text(successCounter);
    }
  } else {
    $('#message').text("Versuche es nochmal!").removeClass('success').addClass('error show');
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];   // swap elements
  }
  return array;
}

function startLesson(generatorFn) {
  let generator = generatorFn;
  let currentTask = null;

  function newTask() {
    currentTask = generator();
    renderTask(currentTask);
  }

  // Render first exercise
  newTask();

  $('#nextExercise').click(() => newTask());

  $('#checkAnswer').click(() => checkAnswer(currentTask));

  $('#answer').on('keyup', function(e) {
    if (e.key === 'Enter') {
      checkAnswer(currentTask);
    }
  });
}
