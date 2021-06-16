//Creare un oggetto che rappresenti un triangolo rettangolo, 
//con le seguenti proprietà: base e altezza.
//Calcolare perimetro e area e stampare il risultato con console.log

var triangle = {
    base: 1,
    heigth: 1
}

var area = triangle.base * triangle.heigth / 2;
var perimetro = Math.sqrt((triangle.base*triangle.base) + (triangle.heigth*triangle.heigth)) + triangle.base + triangle.heigth;

console.log("L'area del triangolo è: ", area);
console.log("Il perimetro del triangolo è: ", perimetro);