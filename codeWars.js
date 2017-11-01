function repeats(arr) {
  let numbersRepetitions = {};
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];

    if (!numbersRepetitions[number]) {
      numbersRepetitions[number] = 1;
      sum += number;
    } else {
      sum -= number;
    }
  }

  return sum;
}

var animal = {};
animal.username = 'brickhouse';
console.log(animal);

animal['tagline'] = 'woof mufugga';

var noises = [];

console.log(animal);

var count = 0;
for (var key in animal) {
  count++;
  if (key === 'username') {
    console.log('hi my name is ' + animal.username);
  }
  if (key === 'tagline') {
    console.log('I like to say ' + animal['tagline']);
  }
}

function golfScoreCalculator(parList, scoreList) {
  var parArray = [];
  var scoreArray = [];
  var count = 0;
  var totalsArray = [];
  for (var i = 0; i < parList.length; i++) {
    parArray.push(Number(parList[i]));
  }
  for (var i = 0; i < scoreList.length; i++) {
    scoreArray.push(Number(scoreList[i]));
  }
  while (parArray.length && scoreArray.length) {
    count += scoreArray.shift() - parArray.shift();
  }
  return count;
}

console.log(golfScoreCalculator('443454444344544443', '353445334534445344')); //, -1);
