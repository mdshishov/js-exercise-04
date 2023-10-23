// Задание 1. Обратное число.
// Создайте функцию reverseNumber, которая принимает число и возвращает число, записанное в обратном порядке. Например, если вход - 12345, функция должна вернуть 54321.

// reverseNumber(11);    // 11
// reverseNumber(211);   // 112
// reverseNumber(9876);  // 6789

export const reverseNumber = (num) => {
  const str = num.toString();
  let res = '';

  for (let i = 0; i < str.length; i += 1) {
    res = str[i] + res;
  }

  return Number(res);
};

console.log('Задание 1');
console.log(reverseNumber(11));
console.log(reverseNumber(211));
console.log(reverseNumber(9876));
console.log('');


// Задание 2. Определение, является ли число квадратным числом.
// Создайте функцию isPerfectSquare, которая принимает число и определяет, является ли оно квадратом какого-то целого числа.

// isPerfectSquare(16); // true
// isPerfectSquare(-4); // false
// isPerfectSquare(0);  // true

export const isPerfectSquare = (num) => num ** 0.5 === Math.round(num ** 0.5);

console.log('Задание 2');
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(-4));
console.log(isPerfectSquare(0));
console.log('');


// Задание 3. Вычисление факториала.
// Создайте функцию factorial, которая принимает положительное целое число и возвращает его факториал.

// factorial(0); // 1
// factorial(2); // 2
// factorial(5); // 120

export const factorial = (num) => {
  if (num === 0) {
    return 1;
  }

  let res = 1;
  for (let i = 2; i <= num; i += 1) {
   res *= i;
  }
  return res;
};

console.log('Задание 3');
console.log(factorial(0));
console.log(factorial(2));
console.log(factorial(5));
console.log('');


// Задание 4. Поиск наибольшего общего делителя (НОД).
// Создайте функцию findGCD, которая принимает два числа и возвращает их наибольший общий делитель.

// findGCD(48, 18); // 6
// findGCD(10, 11); // 1
// findGCD(44, 11); // 11

// Задание 5. Объединение массивов.
// Создайте функцию mergeStrings, которая принимает несколько строк и объединяет их в один.

// mergeStrings();        // ''
// mergeStrings('a','b'); // 'ab'
// mergeStrings('a','C','!');     // 'aC!'