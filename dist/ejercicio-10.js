/*
El nombre de usuario tiene que tener al menos 4 caracteres y no más de 30.
El nombre de usuario no puede empezar ni terminar con un guión bajo.
El nombre de usuario tiene que contener al menos una letra mayúscula, una letra minúscula, un número y algún símbolo especial ($,-,_).
No se permite la repetición de un mismo tipo de caracter más de dos veces seguidas.
*/
function isValidUsername(username) {
    const regexUpper = /[A-Z]/g;
    const regexLower = /[a-z]/g;
    const findNumber = /[0-9]/g;
    const findSysmbol = /[$_-]/g;
    const regexUpper3Times = /[A-Z][A-Z][A-Z]/g;
    const regexLower3Times = /[a-z][a-z][a-z]/g;
    const findNumber3Times = /[0-9][0-9][0-9]/g;
    const findSysmbol3Times = /[$_-][$_-][$_-]/g;
    if (username.length < 4 || username.length > 30) {
        return false;
    }
    if (username[0] == "_" || username[username.length - 1] == "_") {
        return false;
    }
    if ((username.match(regexUpper) !== null) && (username.match(regexLower) !== null) && (username.match(findNumber) !== null) && (username.match(findSysmbol) !== null)) {
        if ((username.match(regexUpper3Times) === null) && (username.match(regexLower3Times) === null) && (username.match(findNumber3Times) == null) && (username.match(findSysmbol3Times) == null)) {
            return true;
        }
    }
}
let username1 = "Ab$93n_8";
let Result_eje10_1 = isValidUsername(username1);
console.log(`El nombre "${username1}" es valido? \nRespuesta: ${Result_eje10_1}`);
let username2 = "u__hello$122__";
let Result_eje10_2 = isValidUsername(username2);
console.log(`El nombre "${username2}" es valido? \nRespuesta: ${Result_eje10_2}`);
