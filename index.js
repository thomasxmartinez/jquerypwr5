$('h1.pwr5')
  .text('PWR5')
  .val();

$('h1.sign-in')
  .text('Please Sign In')
  .val();

$('strong.email')
  .text('E-mail')
  .val();

$('strong.password')
  .text('Password')
  .val();

$('h4.find')
  .text('Find Us On')
  .val();

$('ul.find-us-footer').append('<li><em>Reddit</em></li>', '<li><em>Twitter</em></li>', '<li><em>Instagram</em></li>');

function signedIn() {
  if (event.target.id === 'send') {
    window.location.href = './html/workouts.html';
    var data = $('userName').value;
    localStorage.setItem('name', JSON.stringify(data));
  } else {
  }
}

$('input.button').on('click', signedIn);

//workouts.html
$('h1.workout')
  .text('Enter your max')
  .val();

$('strong.deads')
  .text('Dead Lift')
  .val();

$('strong.squat')
  .text('Squats')
  .val();

$('strong.bench')
  .text('Bench')
  .val();

$('strong.bbrow')
  .text('Barbell Row')
  .val();

$('strong.shoulder')
  .text('Shoulder Press')
  .val();
