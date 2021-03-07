function isValid(cadena:string):boolean{
    
    let answer:string = "true";

    if(cadena.length == 0){
        return true;
    }

    let caden_s:string = cadena.replace(/[0-9]/g, ",");
    let cadena_s:string [] = caden_s.split(",");

    let cadena_num: string = cadena.replace(/[a-zA-Z]/g,"");
    let cadena_num_s: string [] = cadena_num.split("");

    //Comparar
    for(let i:number = 0; i < cadena_num_s.length; i++){
        if(parseInt(cadena_num_s[i]) == cadena_s[i+1].length){
            answer = "true";
        }else{
            answer = "false";
        }
    }
    if(answer == "true"){
        return true;
    }else{
        return false;
    }
}

let cadenavacia: string = "";
let Result_eje3_1 = isValid(cadenavacia);
console.log(`La cadena ${cadenavacia} es valido? \nRespuesta:${Result_eje3_1}`);


let cadena_eje3_1: string = "2hi3sol6abcdef";
let Result_eje3_2 = isValid(cadena_eje3_1);
console.log(`La cadena ${cadena_eje3_1} es valido? \nRespuesta:${Result_eje3_2}`);