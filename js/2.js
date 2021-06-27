/* Susikurti objektą "Kvadratas".
Objektas turi priimti du kintamuosius: a ir b kraštines.
Sukurti du metodus, kurie skaičiuoja kvadrato plotą, perimetrą, įstrižainės ilgį.
Informaciją išvesti į <p> žymę.
Papildoma: a ir b kintamieji apibrežia kvadratą pikseliais. Pagal įvestas reikšmes į input, HTML nubraižomas kvadrato objektas. */
"use strict";


document.getElementById("patvirtinti").addEventListener("click", function() {
    let a,b;
    a = parseFloat(document.getElementById("a-krastine").value);
    b = parseFloat(document.getElementById("b-krastine").value);
    let kvadratas = {
        a:3, 
        b:4,

        paleidimas: function() {
            this.a = a;
            this.b = b;
        },
        plotasPerimetras: function() {
            let plotas; 
            let perimetras;
            plotas = this.a * this.b;
            perimetras = 2 * this.a + 2 * this.b;
            return [plotas,perimetras];
        },
        istrizaine: function(){
            let ilgis;
            ilgis = Math.sqrt(this.a * this.a + this.b * this.b);
    
            return ilgis;
        },
        nubrezk :function(){
            let elementas = document.querySelector(".keturkampis");
            elementas.style.width = this.a + "px";
            elementas.style.height = this.b+ "px";
        },
        isvesk: function(){
            document.getElementById("perimetras").innerText = kvadratas.plotasPerimetras()[0];
            document.getElementById("plotas").innerText = kvadratas.plotasPerimetras()[1];
            document.getElementById("istrizaine").innerText = kvadratas.istrizaine();
        }
    };
    kvadratas.paleidimas();
    kvadratas.isvesk();
    kvadratas.nubrezk();
    

});
