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
console.log(insertDash(454793));
