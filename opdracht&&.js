const age = 20;
if (age >= 18) {
    console.log('jij mag naar binnen');
} else if (age < 18) {
    console.log('wil je buiten blijven, jij mag nog niet naar binnen');
}
const isFemale = false;
if (isFemale) {
    console.log('Let\'s party!');

} else {
    console.log('Sorry, vandaag is ladies night');

}
const driverStatus = 'bob';
if (driverStatus === 'bob') {
    console.log("jij mag rijden")

} else {
    console.log('jij mag niet rijden')
}
if (age >= 18 && age <= 25) {
    console.log("You get 50% off!")
}
//const firstName = "Bram";
//const firstName = "René"
const firstName = "Sarah"
if (firstName === "Bram" || firstName === "Sarah") {
    console.log("Free beer for Sarah or Abraham!");

}
//const totalAmount = 50
const totalAmount = 120
//const totalAmount = 55
if (totalAmount > 25 && totalAmount < 50) {
    console.log("Als jij bestel voor meer dan 25 euro, krijg je gratis een portie veggie bitterballen!")
}
else if (totalAmount > 50 && totalAmount < 100) {
    console.log("Als jij bestel voor meer dan 50 euro, krijg je gratis een portie nachos!")
}
else if (totalAmount > 100) {
    console.log("Als jij bestel voor meer dan 100 euro,krijg je gratis een fles champagne!")
}