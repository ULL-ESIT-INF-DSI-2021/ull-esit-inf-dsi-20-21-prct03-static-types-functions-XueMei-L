function isValidISBN(ISBN) {
    let total = 0;
    ISBN = ISBN.replace(/[-]/g, ""); //eliminar quion
    if (ISBN.length != 10) {
        return false;
    }
    for (let i = 0; i < ISBN.length; i++) {
        if (ISBN[i] == "X") {
            total += (10 * (10 - i));
        }
        else {
            total += (Number(ISBN[i]) * (10 - i));
        }
    }
    if (total % 11 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let ISBN_eje6_0 = "3-598-21508-8";
let Result_eje6_0 = isValidISBN(ISBN_eje6_0);
console.log(`El ISBN "${ISBN_eje6_0} es valido?": ${Result_eje6_0}`);
let ISBN_eje6_1 = "3598215088";
let Result_eje6_1 = isValidISBN(ISBN_eje6_1);
console.log(`El ISBN "${ISBN_eje6_1} es valido?": ${Result_eje6_1}`);
let ISBN_eje6_2 = "3-598-21507-X";
let Result_eje6_2 = isValidISBN(ISBN_eje6_2);
console.log(`El ISBN "${ISBN_eje6_2} es valido?": ${Result_eje6_2}`);
let ISBN_eje6_3 = "359821507X";
let Result_eje6_3 = isValidISBN(ISBN_eje6_3);
console.log(`El ISBN "${ISBN_eje6_3} es valido?": ${Result_eje6_3}`);
let ISBN_eje6_4 = "1-990317-X";
let Result_eje6_4 = isValidISBN(ISBN_eje6_4);
console.log(`El ISBN "${ISBN_eje6_4} es valido?": ${Result_eje6_4}`);
