/** @format */
/** Запрашиваем у пользователя ввести длинну массива в числовом значении */
function getNumberFromUser(message) {
  let userNum;
  do {
    userNum = parseInt(prompt(message));
  } while (isNaN(userNum));
  return userNum;
}
/** Создаем родительский массив указанной пользователем длины*/
function createParentArrLength() {
  for (let i = 0; i < parentUserArrLength; i++) {
    userArr.push([]);
  }
}
/** Создаем вложенные массивы указанной пользователем длины*/
function createSubArrLength() {
  for (let i = 0; i < userArr.length; i++) {
    const subUserArrLength = getNumberFromUser(
      `Введите длину ${i + 1}-го вложенного массива`
    );
    for (let k = 0; k < subUserArrLength; k++) {
      userArr[i].push([]);
    }
  }
}
/** Добавляем данные во вложенные массивы*/
function addDataUserArr() {
  for (let i = 0; i < userArr.length; i++) {
    for (let k = 0; k < userArr[i].length; k++) {
      let userData = prompt(
        `Введите данные для ${k + 1}-го элемента ${i + 1}-го вложенного массива`
      );
      userArr[i][k] = userData;
    }
  }
}
