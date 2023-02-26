//Добавление собственного модуля
const plus = (a, b) => {
    return a +b;
}

module.exports = {plus: plus};

//OR
// module.exports = {
//     plus:  (a, b) => {
//         return a +b;
//     }
// };