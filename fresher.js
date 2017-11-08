'use strict';

function spEng(sentence) {
  let lowEng = sentence.toLowerCase('');
  if (lowEng.indexOf('english') >= 0) {
    return true;
  } else {
    return false;
  }
}

function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (i.toString().indexOf('5') === -1) {
      console.log(count);
      count++;
    }
  }
  return count;
}

function findSum(n) {
  let sum = 0;
  let i = 0;
  while (i < n) {
    i++;
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

function findOdd(A) {
  let intObj = {};
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    if (!intObj[A[i]]) {
      intObj[A[i]] = 1;
    } else {
      intObj[A[i]] = 0;
    }
  }
  for (var key in intObj) {
    if (intObj[key] === 1) {
      return parseInt(key);
    }
  }
}

function insertDash(num) {
  var cont = [];
  let str = num.toString();
  for (var i = 0; i < str.length; i++) {
    if (str[i] % 2 !== 0 && str[i + 1] % 2 !== 0) {
      cont.push(str[i]);
      cont.push('-');
    } else cont.push(str[i]);
  }
  if (cont[cont.length - 1] === '-') {
    cont.splice(cont.length - 1, cont.length);
  }
  return cont.join('');
}

function cubeOdd(arr) {
  var cubed = [];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return undefined;
    }
    cubed.push(arr[i] * arr[i] * arr[i]);
  }
  for (var j = 0; j < cubed.length; j++) {
    if (cubed[j] % 2 !== 0) {
      sum += cubed[j];
    }
  }
  return sum;
}

function findLongest(array) {
  var longest = '';
  console.log(longest.length);
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].toString();
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return Number(longest);
}

function order(s) {
  var words = s.split(' ');
  var orderedWords = [];

  for (var num = 1; num < words.length + 1; num++) {
    for (var i in words) {
      if (words[i].search(num) >= 0) {
        orderedWords.push(words[i]);
      }
    }
  }

  return orderedWords.join(' ');
}

function abbrevName(name) {
  var named = [];
  name = name.split(' ');
  for (var i = 0; i < name.length; i++) {
    named.push(name[i][0]);
    if (named[i + 1] !== null) {
      named.push('.');
    }
  }
  named.splice(named.length - 1, named.length);
  return named.join('');
}

function songDecoder(song) {
  var wubs = [];
  var dub = song.split('WUB');
  console.log(dub);
  for (var i = 0; i < dub.length; i++) {
    if (dub[i] !== '' && dub[i] !== ' ') {
      wubs.push(dub[i]);
    }
  }

  return wubs.join(' ');
}

function solution(str) {
  let newStr = [];
  console.log(str.length);
  for (var i = str.length; i >= 0; i--) {
    newStr.push(str[i]);
  }
  return newStr.join('');
}
console.log(solution('arab'));
