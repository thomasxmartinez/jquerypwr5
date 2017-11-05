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

animal['tagline'] = 'woof mufugga';

var noises = [];

var count = 0;
for (var key in animal) {
  count++;
  if (key === 'username') {
    return 'hi my name is ' + animal.username;
  }
  if (key === 'tagline') {
    return 'I like to say ' + animal['tagline'];
  }
}

function golfScoreCalculator(parList, scoreList) {
  var parArray = [];
  var scoreArray = [];
  var count = 0;
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

function divisibleByThree(str) {
  var nums = [];
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    nums.push(parseInt(str[i]));
  }
  for (var j = 0; j < nums.length; j++) {
    count += nums[j];
  }
  if (count % 3 === 0) {
    return true;
  } else {
    return false;
  }
}

function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

function manipulate(a, b, c, d) {
  return add(a, b) + multiply(c, d);
}

var noiseArray = [];

noiseArray.unshift('honk');
noiseArray.push('bark');

animal.noises = noiseArray;

var animals = [];

animals.push(animal);
var quackers = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: ['quack', 'honk', 'sneeze', 'growl'],
  friends: []
};

var phoebe = {
  username: 'phoebe',
  tagline: 'silence!',
  noises: ['woof', 'arf', 'grr', 'growl'],
  friends: []
};

animals.unshift(quackers);

function animalTester(username) {
  var obj = {
    username: username
  };
  obj.otherArgs = [];
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      obj.otherArgs.push(arguments[i]);
    }
  }

  return obj;
}

function AnimalCreator(username, species, tagline, noises, friends) {
  var obj = {
    username: username,
    species: species,
    tagline: tagline,
    noises: noises,
    friends: []
  };
  return obj;
}
var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
animals.push(sheep);

function addFriend(username, friend) {
  for (var i = 0; i < animals.length; i++) {
    if (username === animals[i].username) {
      animals[i].friends.push(friend.username);
    }
  }
}

addFriend('Cloud', phoebe);
var myFarm = [sheep, phoebe, quackers];

function addMatchesArray(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].matches = [];
  }
}
addMatchesArray(myFarm);

function giveMatches(array, array2) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array[i].username !== array2[j].username && i !== j) {
        array[i].matches.push(array2[j].username);
      }
    }
  }
}
giveMatches(myFarm, animals);

function arrangeCoins(n) {
  var len = 0;
  while (len < n) {
    len++;
    console.log(len);
  }
  return len;
}
console.log(arrangeCoins(5));
//n = 5;
//staircase must = 1 then 2 then 3
//n--;
