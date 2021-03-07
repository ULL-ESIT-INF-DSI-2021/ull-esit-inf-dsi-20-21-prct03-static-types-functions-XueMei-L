function onePunch(cadena:string):string{
    let new_cadena = "";
    if(cadena == "") {
        return "Broken";
    }else{
        new_cadena = cadena.split(" ").sort().join(" ").replace(/[ae]/g, "");
        return new_cadena;
    }
}

let cadena_eje5_1: string = "Beard Jeans Hairbrush Knuckleduster Sand";
let Result_eje5_1: string = onePunch(cadena_eje5_1);
console.log(`\n"${cadena_eje5_1}", Resultado despues de aplicar OnePunch: ${Result_eje5_1}`);


let cadena_eje5_2: string = "Sock Beard Vest Lady Sage";
let Result_eje5_2: string = onePunch(cadena_eje5_2);
console.log(`\n"${cadena_eje5_2}", Resultado despues de aplicar OnePunch: ${Result_eje5_2}`);


let cadena_eje5_3: string = "Beard Jeans Hairbrush Knuckleduster Sand";
let Result_eje5_3: string = onePunch(cadena_eje5_3);
console.log(`\n"${cadena_eje5_3}", Resultado despues de aplicar OnePunch: ${Result_eje5_3}`);


let cadena_eje5_4: string = "Beard Sack Gun Parachute Face-Kicking-Shoes";
let Result_eje5_4: string = onePunch(cadena_eje5_4);
console.log(`\n"${cadena_eje5_4}", Resultado despues de aplicar OnePunch: ${Result_eje5_4}`);


let cadena_eje5_5: string = "Snot Snow Soda Tank Beard";
let Result_eje5_5: string = onePunch(cadena_eje5_5);
console.log(`\n"${cadena_eje5_5}", Resultado despues de aplicar OnePunch: ${Result_eje5_5}`);

let cadena_vacia: string = "";
let Result_brock: string = onePunch(cadena_vacia);
console.log(`\n"${cadena_vacia}", Resultado despues de aplicar OnePunch: ${Result_brock}`);
