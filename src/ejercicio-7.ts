function nextNumber(Num:number):number{

    let aux1: string = "";
    let new_number:string = Num.toString();
    let final_number_s:string = "";
    let final_number_n:number;
    
    //Reposicionar sus digitos
    for(let i: number = 0; i < new_number.length; i++){
        if(new_number.length < 2){
            return -1;
        }
        if(i == new_number.length-2){
            aux1 = new_number[i];
            final_number_s = final_number_s + new_number[i+1];
        }else if(i == new_number.length-1){
            final_number_s += aux1;
        }else{
            final_number_s += new_number[i];
        }
    }

    final_number_n = parseInt(final_number_s);
    
    if(final_number_n <= Num){
        return -1;
    }else{
        return final_number_n;
    }
}



let Result_eje7_1: number = nextNumber(12);
console.log(`${12} -> ${Result_eje7_1}`);


let Result_eje7_2: number = nextNumber(513);
console.log(`${513} -> ${Result_eje7_2}`);


let Result_eje7_3: number = nextNumber(2017);
console.log(`${2017} -> ${Result_eje7_3}`);


let Result_eje7_4: number = nextNumber(9);
console.log(`${9} -> ${Result_eje7_4}`);


let Result_eje7_5: number = nextNumber(111);
console.log(`${111} -> ${Result_eje7_5}`);


let Result_eje7_6: number = nextNumber(531);
console.log(`${531} -> ${Result_eje7_6}`);