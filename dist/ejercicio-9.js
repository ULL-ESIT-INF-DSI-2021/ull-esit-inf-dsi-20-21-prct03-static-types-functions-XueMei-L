//  daño = 50 * (ataque / defensa) * efectividad
/*  Super efectivo = x2 de daño
    Neutral = x1 de daño
    No muy efectivo = x0.5 de daño  */
/*  fuego > hierba
    fuego < agua
    fuego = eléctrico
    agua < hierba
    agua < eléctrico
    hierba = eléctrico  */
function pokemonGame(pokemon_attacker, pokemon_defender, attack, defense) {
    let efectiveness = 0;
    let damage_total = 0;
    if (pokemon_attacker == pokemon_defender) {
        efectiveness = 0.5;
    }
    else {
        switch (pokemon_attacker) {
            case "fuego":
                if (pokemon_defender == "hierba") {
                    efectiveness = 2;
                }
                else if (pokemon_defender == "agua") {
                    efectiveness = 0.5;
                }
                else {
                    efectiveness = 1;
                }
            case "agua":
                if (pokemon_defender == "fuego") {
                    efectiveness = 2;
                }
                if (pokemon_defender == "hierba" || pokemon_defender == "electrico") {
                    efectiveness = 0.5;
                }
            case "hierba":
                if (pokemon_defender == "fuego") {
                    efectiveness = 0.5;
                }
                else if (pokemon_defender == "electrico") {
                    efectiveness = 1;
                }
                else {
                    efectiveness = 2;
                }
            case "electrico":
                if (pokemon_defender == "fuego" || pokemon_defender == "hierba") {
                    efectiveness = 1;
                }
                else {
                    efectiveness = 2;
                }
        }
    }
    damage_total = 50 * (attack / defense) * efectiveness;
    return damage_total;
}
console.log(`--- Bienvenido al mundo de Pokemon ---`);
let attacker = "electrico";
let defenser = "fuego";
let value_attack = 10;
let value_defense = 8;
let result = pokemonGame(attacker, defenser, value_attack, value_defense);
console.log(`El atacante es: ${attacker}\nEL defensor es: ${defenser}\nEl daño que realiza: ${value_attack}\nLa capacidad de defensa: ${value_defense}\nEl daño causado al final es: ${result}`);
console.log(`--- Bienvenido al mundo de Pokemon ---`);
