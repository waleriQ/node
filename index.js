//
// const CC = require('currency-converter-lt');
// let currencyConverter = new CC ({from:"USD", to:"RUB", amount:10});
//
// currencyConverter.convert().then( (response) => {
//     console.log(`Result: ${response}`);
// } )

// ВСТРОЕННЫЙ МОДУЛЬ
// const os = require('os');
// let platform = os.platform();
// let arch = os.arch();
// let homedir = os.homedir();
// let networkInterfaces = os.networkInterfaces();
// let uptime = os.uptime()

// console.log(
//     `Операционная система: ${platform},
// Разрядность ${arch},
//  Домашняя директория ${homedir},
//  Данные интернет провадера: ${networkInterfaces}
//  Время работы системы: ${uptime}`);

//Добавление собственного модуля
const math = require('./math');
let resultMath = math.plus(4,5);
console.log(resultMath);










// let a = [1,1,1,1,2,3];
// let b = [4,5,6,2,3];
// let sum = a.concat(b);
// let result = [...new Set(sum)];
// console.log(result);


// let first = ['a', 'b', 'c', 'd'];
// let second =[1, 2, 3, 4, 5];
// let res = first.concat(second);
// function compare(a, b) {
//     return a - b;
// }
// res.sort(compare);
// console.log(res);

// let first = ['a', 'b', 'c', 'd'];
// let second =[1, 2, 2, 2, 4, 3, 4];
// second.sort( (a,b) => a-b);
// let result = new Set(second);
//
// console.log(result);

// let arr = [2,34,5,6];
// let result = arr.reduce( (num, item) => num + item, 0 );
// console.log(result);
// arr.length


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
// let sum = 0;
// for (let item of Object.values(salaries)) {
//     sum += item;
// }
// console.log(sum);
//
//








