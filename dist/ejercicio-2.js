function invertir(cadena) {
    var x = cadena.length;
    var cadenaInvertida = "";
    while (x >= 0) {
        cadenaInvertida = cadenaInvertida + cadena.charAt(x);
        x--;
    }
    return cadenaInvertida;
}
function factorial(value) {
    if (value < 0) {
        return -1;
    }
    else {
        return (value * factorial(value - 1));
    }
}
//Caso decimal solo
function decimalToFactorial(ValueEntero) {
    let final_number = "";
    let count = 1;
    while (ValueEntero != 0) {
        final_number += (ValueEntero % count).toString();
        ValueEntero = Math.floor(ValueEntero / count);
        count++;
    }
    return invertir(final_number);
}
let number_s = 463;
let number_0 = 0;
let Result_eje2 = decimalToFactorial(number_s);
console.log(`El numero 463 despues de convertirse en factorial es ${Result_eje2}.`);
