/** @format */

let string = prompt('Введите текст');
let removeLetters = prompt('Введите буквы для удаления').split('');
let result = removeLettersFromString(string, removeLetters);

function removeLettersFromString(string, removeLetters) {
  let arrLetters = string.split('');
  let filterArr = arrLetters.filter((char) => !removeLetters.includes(char));
  return filterArr.join('');
}

console.log(result);
