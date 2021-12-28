//function declaration
function numbers(a, b) {
    let sum = (a * a + b * b) * (a * a + b * b)
    return sum
}
console.log(numbers(3, 4));
console.log(numbers(5, 7));
console.log(numbers(8, 9))
//function expression
const numbers1 = function (c, d) {
    let sum1 = (c * c + d * d) * (c * c + d * d);
    return sum1
}
console.log(numbers1(3, 4));
console.log(numbers1(5, 7));
console.log(numbers1(8, 9));
//arrow function
const numbers2 = (a, b) => {
    let sum = (a * a + b * b) * (a * a + b * b)
    return sum
}
console.log(numbers2(3, 4));
console.log(numbers2(5, 7));
console.log(numbers2(8, 9));