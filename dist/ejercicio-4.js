//caso Snake to Camel case
function fromSnakeToCamelCase(snake) {
    let camelcase = " ";
    for (let i = 0; i < snake.length; i++) {
        if (snake[i] == "_") {
            camelcase += snake[i + 1].toUpperCase();
            i++;
        }
        else {
            camelcase += snake[i];
        }
    }
    return camelcase;
}
//caso Camel to Snake case
function fromCamelToSnakeCase(snake) {
    return snake.split(/(?=[A-Z])/).join('_').toLowerCase();
}
//caso Snake to Camel case
let cadena = "hola_mundo";
let Result_eje4_1 = fromSnakeToCamelCase(cadena);
console.log(`la cadena ${cadena} en forma camel case es: ${Result_eje4_1}`);
//caso Camel to Snake case
let camel = "holaMundoHelloWorld";
let Result_eje4_2 = fromCamelToSnakeCase(camel);
console.log(`la cadena ${camel} en forma camel case es: ${Result_eje4_2}`);
