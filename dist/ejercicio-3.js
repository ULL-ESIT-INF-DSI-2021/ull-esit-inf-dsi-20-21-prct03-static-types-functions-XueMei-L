function isValid(cadena) {
    let answer = "true";
    if (cadena.length == 0) {
        return true;
    }
    let caden_s = cadena.replace(/[0-9]/g, ",");
    let cadena_s = caden_s.split(",");
    let cadena_num = cadena.replace(/[a-zA-Z]/g, "");
    let cadena_num_s = cadena_num.split("");
    //Comparar
    for (let i = 0; i < cadena_num_s.length; i++) {
        if (parseInt(cadena_num_s[i]) == cadena_s[i + 1].length) {
            answer = "true";
        }
        else {
            answer = "false";
        }
    }
    if (answer == "true") {
        return true;
    }
    else {
        return false;
    }
}
let cadenavacia = "";
let Result_eje3_1 = isValid(cadenavacia);
console.log(`La cadena ${cadenavacia} es valido? \nRespuesta:${Result_eje3_1}`);
let cadena_eje3_1 = "2hi3sol6abcdef";
let Result_eje3_2 = isValid(cadena_eje3_1);
console.log(`La cadena ${cadena_eje3_1} es valido? \nRespuesta:${Result_eje3_2}`);
