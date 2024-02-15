/** @format */
let myArray = [30, true, null, 25, 20, false, 'str', 3, 1, 5];

function getAverageNum(arr) {
  let averageNum = 0;
  let countOfNumbers = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      averageNum += arr[i];
      countOfNumbers++;
    }
  }
  if (countOfNumbers === 0) {
    return 'Нет числовых элементов в массиве';
  }
  averageNum = averageNum / countOfNumbers;
  return averageNum.toFixed();
}

let average = getAverageNum(myArray);
console.log(`Среднее арифметическое числовых значений массива: ${average}`);
