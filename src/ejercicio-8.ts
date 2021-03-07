function countIPs(IP1:string, IP2:string){
    
    let rango: number = 0;

    let IP1_string: string[] = IP1.split(".");
    let IP2_string: string[] = IP2.split(".");

    for(let i: number= 0; i < IP1_string.length; i++){
        //console.log(`yuan su : ${IP1_string[i]}`);
        if(i == 3){
            rango += (parseInt(IP2_string[i]) - parseInt(IP1_string[i]));
            //console.log(`resultado: ${rango}\n`);
        }else{
            rango += (parseInt(IP2_string[i]) - parseInt(IP1_string[i]))* Math.pow(256,(3-i));
            //console.log(`resultado: ${rango}\n`);
        }
    }
    return rango;

}


const IP1 = "10.0.0.0";
const IP2 = "10.0.0.50";
let Result_eje8_1 = countIPs(IP1,IP2);
console.log(`ipsInRange(${IP1}, ${IP2}) == ${Result_eje8_1}`);


const IP3 = "10.0.0.0";
const IP4 = "10.0.1.0";
let Result_eje8_2 = countIPs(IP3,IP4);
console.log(`ipsInRange(${IP3}, ${IP4}) == ${Result_eje8_2}`);


const IP5 = "20.0.0.10";
const IP6 = "20.0.1.0";
let Result_eje8_3 = countIPs(IP5,IP6);
console.log(`ipsInRange(${IP5}, ${IP6}) == ${Result_eje8_3}`);


const IP7 = "20.0.0.20";
const IP8 = "20.1.0.0";
let Result_eje8_4 = countIPs(IP7,IP8);
console.log(`ipsInRange(${IP7}, ${IP8}) == ${Result_eje8_4}`);