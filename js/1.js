/* 1. Susikurti objektų masyvą:
* Masyve 100 objekto elementų.
* Objekto vidiniai kintamieji: id, vardas.
* Vardas reikšmė = vardas1,vardas2 ir t.t.
* Id reikšmė = 1, 2 ir t.t. 
Papildomai:
Pagal sukurtą obejktų masyvą, sukurti tiek pat div elementų, kuriuose išvedamas id ir vardas.
 Kas antras div - mėlynas. */

 "use strict";

let masyvas = [];
for(let i=0; i<100;i++){
    let objektas = {
        id: i+1,
        vardas: "vardas" + (i+1)
    }
    masyvas[i] = objektas;
    
    let div = document.createElement("div");
    div.innerHTML = objektas.id + " " + objektas.vardas;
    document.querySelector(".container").append(div);
}
console.log(masyvas);