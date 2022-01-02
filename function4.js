function ageControl(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}
function age1(ageControl) {
    if (ageControl) {
        return "Hallo there"
    } else {
        return "Hey kiddo"
    }
}
console.log(ageControl(16));
console.log(age1(ageControl(16)));
console.log(ageControl(25));
console.log(age1(ageControl(26)));
console.log(age1(ageControl(30)));
//Vat exercise 1
let calcVat = (prijs, vat) => prijs * vat;
function prijsMetVat(prijs, vat) {
    const vollePrijs = prijs + calcVat(prijs, vat);
    return (vollePrijs)
}
console.log(prijsMetVat(5, 0.21));
console.log(prijsMetVat(8, 0.21));

//Vat exercise 2

function vatValue(prijs, vat) {
    return [prijs, calcVat(prijs, vat)];

}
console.log(vatValue(6, 0.21));
console.log(vatValue(6, 0.09));
console.log(vatValue(10, 0.21));

