function onePunch(cadena) {
    let new_cadena = "";
    if (cadena == "") {
        return "Broken";
    }
    else {
        new_cadena = cadena.split(" ").sort().join(" ").replace(/[ae]/g, "");
        return new_cadena;
    }
}
let cadena_eje5_1 = "Beard Jeans Hairbrush Knuckleduster Sand";
let Result_eje5_1 = onePunch(cadena_eje5_1);
console.log(`\n"${cadena_eje5_1}", Resultado despues de aplicar OnePunch: ${Result_eje5_1}`);
let cadena_eje5_2 = "Sock Beard Vest Lady Sage";
let Result_eje5_2 = onePunch(cadena_eje5_2);
console.log(`\n"${cadena_eje5_2}", Resultado despues de aplicar OnePunch: ${Result_eje5_2}`);
let cadena_eje5_3 = "Beard Jeans Hairbrush Knuckleduster Sand";
let Result_eje5_3 = onePunch(cadena_eje5_3);
console.log(`\n"${cadena_eje5_3}", Resultado despues de aplicar OnePunch: ${Result_eje5_3}`);
let cadena_eje5_4 = "Beard Sack Gun Parachute Face-Kicking-Shoes";
let Result_eje5_4 = onePunch(cadena_eje5_4);
console.log(`\n"${cadena_eje5_4}", Resultado despues de aplicar OnePunch: ${Result_eje5_4}`);
let cadena_eje5_5 = "Snot Snow Soda Tank Beard";
let Result_eje5_5 = onePunch(cadena_eje5_5);
console.log(`\n"${cadena_eje5_5}", Resultado despues de aplicar OnePunch: ${Result_eje5_5}`);
let cadena_vacia = "";
let Result_brock = onePunch(cadena_vacia);
console.log(`\n"${cadena_vacia}", Resultado despues de aplicar OnePunch: ${Result_brock}`);
