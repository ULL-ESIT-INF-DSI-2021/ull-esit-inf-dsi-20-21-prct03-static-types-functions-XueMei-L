//Ejercicio 1 - Años bisiestos
function isLeapYear(Year) {
    if (Year % 4 == 0 && Year % 100 || Year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let Year = 2000;
let Result_eje1 = isLeapYear(Year);
console.log(`${Year} es un año bisieto? = ${Result_eje1}`);
console.log(`1990 es un año bisieto? = ${isLeapYear(1990)}`);
console.log(`1996 es un año bisieto? = ${isLeapYear(1996)}`);
console.log(`1997 es un año bisieto? = ${isLeapYear(1997)}`);
