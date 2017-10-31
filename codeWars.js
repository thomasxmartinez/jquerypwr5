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
