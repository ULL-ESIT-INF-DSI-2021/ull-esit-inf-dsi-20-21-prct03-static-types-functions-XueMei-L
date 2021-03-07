# Práctica 3 - Tipos de datos estáticos y funciones

```
Universidad: Universidad de La laguna
Asignatura: Desarrollo de Sistemas Informaticos
Curso: 2020 - 2021
Autor: XueMei Lin
```

## 1. Introducción
Respecto a esa practica, vamos a resolver varios ejercicios para aprender más conocimiento sobre el TypeScript. Vamos a conocer a TypeScript con más profundidad, vamos a ver varios ejemplos sobre los dos siguientes aspectos:

- Tipos de variables
- Funciones

## 2. Objetivos

El objetivo de esta practica consiste en aprender a saber definir bien tipos de variables y manejar bien las funciones. 

## 3. Ejercicios propuestas

### 3.1. Ejercicio 1 - Años bisiestos

Una función `isLeapYear` que devuelva si un año concreto es bisiesto o no. La función deberá recibir como parámetro el año a evaluar y devolverá verdadero o falso según corresponda. Un año bisiesto ocurre en el calendario gregoriano tiene que cumplir lo siguiente:

***1.  Cada año que es divisible por 4.***
***2.  Excepto cada año que es divisible por 100.***
***3. Al menos que el año también sea divisible por 400.***

````
//Ejercicio 1 - Años bisiestos
function isLeapYear(Year:number): boolean{
    if(Year % 4 == 0 && Year % 100 || Year % 400 == 0){
        return true;
    }else{
        return false;
    }
}

let Year:number = 2000;
let Result_eje1 = isLeapYear(Year);
console.log(`${Year} es un año bisieto? = ${Result_eje1}`);

console.log(`1990 es un año bisieto? = ${isLeapYear(1990)}`);
console.log(`1996 es un año bisieto? = ${isLeapYear(1996)}`);
console.log(`1997 es un año bisieto? = ${isLeapYear(1997)}`);
````

Por lo tanto para realizar hemos creado una función, donde vamos a poner estas 3 condiciones, y el resultado es lo siguiente:

![image-20210308001406285](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210308001406285.png)



### 3.2. Ejercicio 2 - Notación decimal y factorial

Codificar números decimales con factoriales es una forma de escribir números en un sistema base que depende de factoriales, en lugar de potencias. En este sistema, el último dígito siempre es 0 y está en base `0!`. El dígito anterior pueder ser `0 o 1` y está en base `1!`. Del mismo modo, el dígito anterior es `0, 1 o 2` y está en base `2!`. De manera más general, el enésimo dígito respecto al último es siempre `0, 1, 2, ..., n` y está en base `n!`. Para más información consulte el [Sistema Factorial](https://es.wikipedia.org/wiki/Factorádico).

````
//Ejercicio2 - Notación decimal y factorial
function invertir(cadena:string) {
    var x = cadena.length;
    var cadenaInvertida = "";
  
    while (x>=0) {
      cadenaInvertida = cadenaInvertida + cadena.charAt(x);
      x--;
    }
    return cadenaInvertida;
}

function factorial(value: number): number {
    if (value < 0) {
        return -1;
    }else{
        return (value * factorial(value - 1));
    }
}

//Caso decimal solo
function decimalToFactorial(ValueEntero:number){
    let final_number: string = "";
    let count: number = 1;
    while(ValueEntero != 0){
        final_number += (ValueEntero % count).toString();
        ValueEntero = Math.floor(ValueEntero/count);
        count++;
    }
    return invertir(final_number);
}


let number_s: number = 463;
let number_0: number = 0;
let Result_eje2 = decimalToFactorial(number_s);
console.log(`El numero 463 despues de convertirse en factorial es ${Result_eje2}.`);
````

Para resolver este ejercicio he realizado 3 funciones, donde `invertir` hace que invertir la `cadena` al revés. La función `factorial` simplemente es cuando en el caso de que el numero sea negativo, también para caso de que el numero sea 0.Y Por último en la función `decimalToFactorial` hace que dividir `value` a cada numero, obtener el resto, y así hace la operación hasta que se termine.

![image-20210308001952985](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210308001952985.png)



### 3.3. Ejercicio 3 - Validador de mensajes

Supongamos que recibimos un mensaje en una cadena de texto que sigue un patrón “`Xsubcadena1Ysubcadena2`” dónde X e Y son números y `subcadena1` y `subcadena2` son cadenas de texto. Queremos comprobar la validez de un determinado mensaje en función de unas reglas preestablecidas. Para decidir si el mensaje es válido, debemos dividir la cadena de texto en números y subcadenas. Posteriormente, debemos comprobar que para cada número que encontramos, la longitud de la subcadena es igual al número anterior.

````
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
````



En la función `isValid` simplemente hace que crear dos string[] para numero y para letras, en caso del numero, elimina todas las letras y guarda en `cadena_s` y por otro lado, el caso de letras, elimina todas las letras y guarda`cadena_num_s`, y luego comparar la longitud de la `cadena_s` con `i`valor de la funcion`cadena_num_s`.

![image-20210308002749496](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210308002749496.png)

### 3.4. Ejercicio 4 - Conversor de estilo

A la hora de desarrollar código, hay diversas maneras de nombrar las variables, funciones, clases y otros elementos que componen el código. Un patrón muy usado en lenguajes de programación como Python es el *Snake Case*. Este patrón consiste en dividir los nombres de las variables y funciones usando guiones bajos entre palabras. Por ejemplo: `sample_string` o `the_stealth_warrior`.

Por el contrario, en lenguajes de programación como Java, C# y C/C++, predomina el denominado *Camel Case*. En este caso, los nombres de variables, clases y funciones se separan escribiendo con mayúscula la primera letra de la siguiente palabra. Siguiendo los ejemplos anteriores: `sampleString` o `theStealthWarrior`.

Desarrolle dos funciones `fromSnakeToCamelCase` y `fromCamelToSnakeCase` que conviertan una cadena de texto de un formato a otro. Ambas funciones recibirán como parámetro una cadena de texto y devolverán otra cadena con el nuevo formato. La primera función recibirá una cadena de texto en formato Snake Case y la convertirá a formato Camel Case. La segunda función realizará la operación contraria.

Nota: Recuerde que las cadenas resultantes deben comenzar con minúscula.

````//caso Snake to Camel case
function fromSnakeToCamelCase(snake:string){
    let camelcase:string = " ";
    for(let i = 0; i < snake.length; i++){
        if(snake[i] == "_"){
            camelcase += snake[i+1].toUpperCase();
            i++;
        }
        else
        {
            camelcase += snake[i];
        }
    }
    return camelcase;
}

//caso Camel to Snake case
function fromCamelToSnakeCase(snake:string){
    return snake.split(/(?=[A-Z])/).join('_').toLowerCase();
}


//caso Snake to Camel case
let cadena:string = "hola_mundo";
let Result_eje4_1 = fromSnakeToCamelCase(cadena);
console.log(`la cadena ${cadena} en forma camel case es: ${Result_eje4_1}`);


//caso Camel to Snake case
let camel:string = "holaMundoHelloWorld";
let Result_eje4_2 = fromCamelToSnakeCase(camel);
console.log(`la cadena ${camel} en forma camel case es: ${Result_eje4_2}`);
````

Para realizar este ejercicio,hemos hecho en la funcion `fromSnakeToCamelCase`, recorrer la variable data, cuando encontramos un "_", cambiamos la siguiente letra a mayuscula, y incrementamos el paso.

En el caso de de `fromCamelToSnakeCase`, es más sencillo, ya que simplemente hay que encontrar una letra mayuscula, y antes de dicha letra le añadimos "_"y le cambiamos a minuscula.

![image-20210308003456974](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210308003456974.png)

### 3.5. Ejercicio 5 - Un solo golpe

Chuck Norris es el tío más duro del mundo, una vez golpeó a un caballo en la barbilla y sus descendientes se conocen hoy en día como jirafas.

Como sus puñetazos, Chuck NUNCA necesita más de una línea de código. La tarea que debes realizar, para complacer a Chuck Norris, es crear una única función que haga uso de cuatro métodos encadenados en una única línea. Puedes utilizar varias líneas, pero no querrás cabrear a Chuck Norris.

Chuck espera como resultado una cadena de caracteres con sus cosas favoritas **separadas**, **ordenadas**, **unidas** de nuevo y, además, que se eliminen todas las apariciones de las letras `e` y `a`. Si alguien se atreve a retar a Chuck Norris con una cadena vacía la función devuelve “Broken!”.

```function onePunch(cadena:string):string{
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
```

Solo hemos realizamos un pequeño paso para conseguir este ejercicio: si es cadena vacia, retornamos "BROCK", sino, simplemente hacemos separar, ordenar, añadir espacio,y por último eliminar la letra a y e.

El resultado es lo siguiente:

![image-20210308003517635](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210308003517635.png)

### 3.6. Ejercicio 6 - Conversor ISBN

El [Proceso de verificación ISBN-10](https://en.wikipedia.org/wiki/International_Standard_Book_Number) se usa para validar la identificación de números. Normalmente contienen guiones y siguen un patrón como: 3-598-21508-8.

El formato ISBN-10 está compuesto por 9 dígitos (0-9) y un caracter de comprobación que puede ser un dígito (0-9) o una X. En caso de que el caracter de comprobación sea una X, se representa con el valor ‘10.

````function isValidISBN(ISBN:string): boolean{
function isValidISBN(ISBN:string): boolean{
let total:number = 0;
    ISBN = ISBN.replace(/[-]/g,"");                                     //eliminar quion
    if(ISBN.length != 10){
        return false;
    }
    
    for(let i = 0; i < ISBN.length; i++){
        if(ISBN[i] == "X"){
            total += (10 * (10 - i));
        }else{
            total += (Number(ISBN[i]) * (10 - i));
        }
    }
    if(total % 11 == 0){
        return true;
    }else{
        return false;
    }
}

let ISBN_eje6_0: string = "3-598-21508-8";
let Result_eje6_0 = isValidISBN(ISBN_eje6_0);
console.log(`El ISBN "${ISBN_eje6_0} es valido?": ${Result_eje6_0}`);


let ISBN_eje6_1: string = "3598215088";
let Result_eje6_1 = isValidISBN(ISBN_eje6_1);
console.log(`El ISBN "${ISBN_eje6_1} es valido?": ${Result_eje6_1}`);

let ISBN_eje6_2: string = "3-598-21507-X";
let Result_eje6_2 = isValidISBN(ISBN_eje6_2);
console.log(`El ISBN "${ISBN_eje6_2} es valido?": ${Result_eje6_2}`);


let ISBN_eje6_3: string = "359821507X";
let Result_eje6_3 = isValidISBN(ISBN_eje6_3);
console.log(`El ISBN "${ISBN_eje6_3} es valido?": ${Result_eje6_3}`);


let ISBN_eje6_4: string = "1-990317-X";
let Result_eje6_4 = isValidISBN(ISBN_eje6_4);
console.log(`El ISBN "${ISBN_eje6_4} es valido?": ${Result_eje6_4}`);
````

![image-20210308003433510](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210308003433510.png)

### 3.7. Ejercicio 7 - El siguiente número

````function nextNumber(Num:number):number{
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
````

Para el ejercicio 7, lo que hacemos es invertir los dos últimos digitos para conseguir "el siguiente valor", y después comparamos si el resultado es más grande que el valor inicio, en el caso de que si, pues retornamos el resultado, que seria un valor más grande que el valor origen, en el caso contrario, retornará -1;

![image-20210308003408179](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210308003408179.png)

### 3.8. Ejercicio 8 - Contando IPs

A partir de cadenas de texto que representan direcciones IPv4, cree una función que reciba como parámetros dos cadenas y devuelva un valor numérico que represente el número de IPs disponibles en el rango correspondiente (incluyendo la primera y excluyendo la última).

````
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
````



![image-20210308003417195](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210308003417195.png)

### 3.9. Ejercicio 9 - Entrenador Pokemon

¡¡Estás en medio de un combate Pokemon!! Tu tarea es calcular el daño que un movimiento concreto causará a partir de la siguiente fórmula:

```
daño = 50 * (ataque / defensa) * efectividad
```

Donde `ataque` es tu capacidad de ataque, `defensa` es la capacidad de defensa del oponente y la `efectividad` del ataque se basa en lo expuesto a continuación.

Defina una función que reciba como parámetro el tipo de Pokemon que tiene, el tipo de Pokemon de su oponente, su capacidad de ataque y la capacidad de defensa de su oponente. La función devolverá como resultado el daño causado.

- fuego > hierba

- fuego < agua

- fuego = eléctrico

- agua < hierba

- agua < eléctrico

- hierba = eléctrico

  `Efectividad`

- Super efectivo = x2 de daño

- Neutral = x1 de daño

- No muy efectivo = x0.5 de daño

````
function pokemonGame(pokemon_attacker:string, pokemon_defender:string, attack:number, defense:number):number{
    let efectiveness: number = 0;
    let damage_total: number = 0;

    if(pokemon_attacker == pokemon_defender){
        efectiveness = 0.5;
    }else{
        switch(pokemon_attacker){
            case "fuego":
                if(pokemon_defender == "hierba"){
                    efectiveness = 2;
                }else if(pokemon_defender == "agua"){
                    efectiveness = 0.5;
                }else{
                    efectiveness = 1;
                }
            case "agua":
                if(pokemon_defender == "fuego"){
                    efectiveness = 2;
                }
                if(pokemon_defender == "hierba" || pokemon_defender == "electrico"){
                    efectiveness = 0.5;
                }
            case "hierba":
                if(pokemon_defender == "fuego"){
                    efectiveness = 0.5;
                }else if(pokemon_defender == "electrico"){
                    efectiveness = 1;
                }else{
                    efectiveness = 2;
                }
            case "electrico":
                if(pokemon_defender == "fuego" || pokemon_defender == "hierba"){
                    efectiveness = 1;
                }else{
                    efectiveness = 2;
                }
        }
    }
    damage_total = 50 * ( attack / defense ) * efectiveness;
    return damage_total;

}

console.log(`--- Bienvenido al mundo de Pokemon ---`);
let attacker: string = "electrico";
let defenser: string = "fuego";
let value_attack: number = 10;
let value_defense: number = 8;
let result:number = pokemonGame(attacker, defenser, value_attack, value_defense);
console.log(`El atacante es: ${attacker}\nEL defensor es: ${defenser}\nEl daño que realiza: ${value_attack}\nLa capacidad de defensa: ${value_defense}\nEl daño causado al final es: ${result}`);
console.log(`--- Bienvenido al mundo de Pokemon ---`);
````

![image-20210308003331289](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210308003331289.png)

### 3.10. Ejercicio 10 - Validador de nombre usuario

Cree una función `isValidUsername` que compruebe la validez de un nombre de usuario. La función recibirá como parámetro una cadena con un nombre de usuario y devolverá verdadero o falso según las siguientes condiciones.

1. El nombre de usuario tiene que tener al menos 4 caracteres y no más de 30.
2. El nombre de usuario no puede empezar ni terminar con un guión bajo.
3. El nombre de usuario tiene que contener al menos una letra mayúscula, una letra minúscula, un número y algún símbolo especial ($,-,_).
4. No se permite la repetición de un mismo tipo de caracter más de dos veces seguidas.

````
function isValidUsername(username:string):boolean {

    const regexUpper = /[A-Z]/g;
    const regexLower = /[a-z]/g;
    const findNumber = /[0-9]/g;
    const findSysmbol = /[$_-]/g;

    const regexUpper3Times = /[A-Z][A-Z][A-Z]/g;
    const regexLower3Times = /[a-z][a-z][a-z]/g;
    const findNumber3Times = /[0-9][0-9][0-9]/g;
    const findSysmbol3Times = /[$_-][$_-][$_-]/g;

    if(username.length < 4 || username.length > 30) {
        return false;
    }
    if(username[0] == "_" || username[username.length-1] == "_") {
        return false;
    }
    if((username.match(regexUpper) !== null) && (username.match(regexLower) !== null) && (username.match(findNumber) !== null) && (username.match(findSysmbol) !== null)) {
        if((username.match(regexUpper3Times) === null) && (username.match(regexLower3Times) === null) && (username.match(findNumber3Times) == null) && (username.match(findSysmbol3Times) == null)){
            return true;
        }
    }
}

let username1: string = "Ab$93n_8";
let Result_eje10_1 = isValidUsername(username1);
console.log(`El nombre "${username1}" es valido? \nRespuesta: ${Result_eje10_1}`);

let username2: string = "u__hello$122__";
let Result_eje10_2 = isValidUsername(username2);
console.log(`El nombre "${username2}" es valido? \nRespuesta: ${Result_eje10_2}`);
````

En este ejercicio hacemos declarar las condiciones necesarias, y luego, aplicar a cada condiciones si se cumple todas las condiciones, puede devolvera verdadero, en el caso contrario, falso.

![image-20210308003351709](C:\Users\linyouzi\AppData\Roaming\Typora\typora-user-images\image-20210308003351709.png)

## 4. Conclusiones

Como conclusión, he aprendido más conocimientos sobre el TypeScript, es más fácil de aprender TypeScript que C++, puesto que es más flexible que c++, y es mucho más entendible que c++. 



## 5. Bibliografía

Expresión Regular en JavaScript: https://www.w3schools.com/js/js_regexp.asp

Uso de la función convertir: https://stackoverflow.com/questions/7569335/reverse-a-string-in-java
