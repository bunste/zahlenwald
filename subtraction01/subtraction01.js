$(document).ready(function(){
  let successCounter = 0;
  let countingEnabled = true;
  let ponyIndex = 0;

  const ponies = [
    '../images/pony01.png',
    '../images/pony02.png',
    '../images/pony03.png',
    '../images/pony04.png',
    '../images/pony05.png',
    '../images/pony06.png'
  ];
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
  }

  function newExercise() {
    const a = Math.floor(Math.random() * (100 - 2 + 1)) + 2; // 2 bis 100 inkl.
    const b = Math.floor(Math.random() * (a - 1)) + 1; // 1 <= b < a

    $('#numA').text(a);
    $('#numB').text(b);
    $('#answer').val('');
    $('#message').removeClass('show');
    $('#pony').fadeOut();

    countingEnabled = true;
  }

  // Generate first exercise
  newExercise();

  // Click handlers

  $('#nextExercise').click(function() {
    newExercise();
  });

  $('#checkAnswer').click(function() {
    const answerStr = $('#answer').val().trim();

    if(answerStr === "") {
      $('#message').removeClass('show');
      return;
    }

    const answer = Number(answerStr);
    const a = Number($('#numA').text());
    const b = Number($('#numB').text());
    
    if(answer === a - b) {
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
  });
});