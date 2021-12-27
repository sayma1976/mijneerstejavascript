function bigger(argument) {

    if (argument > 100) {
        result = true;
        return result
    }
    else {
        return false;
    }

}
console.log(bigger(120));
console.log(bigger(90));
console.log(bigger(98));
console.log(bigger(190));
//Bouncer at a club

function gasten(max, current, age) {
    if (age >= 18) {
        result = true

    } else {
        return ('this is a club for adults');

    }
    if (age >= 18 && current < max) {
        return ('come in');
    } else {
        return ("it's too busy  now, come back later");

    }
}
console.log(gasten(100, 80, 17));
console.log(gasten(50, 55, 19));
console.log(gasten(50, 35, 20));
console.log(gasten(50, 30, 16));

//Calculating the average
function calcAverage(a, b, c, d, e) {
    return (a + b + c + d + e) / 5
}
console.log(calcAverage(2, 3, 4, 5, 6));
console.log(calcAverage(8, 9, 4, 5, 6));
console.log(calcAverage(5, 12, 8, 5, 6))
