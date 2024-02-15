/** @format */
const validOperators = ['+', '-', '*', '/', '%', '**'];
const x = getNumberFromUser('Введите первое число');
const y = getNumberFromUser('Введите второе число');
const znak = getMathOperator('Выберите арифметическую операцию');
const result = doMath(x, znak, y);
alert(doMath(x, znak, y));
