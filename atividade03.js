/*****************************************************
                Lista de exercicio 03
 *****************************************************/
// 1. Crie um array de frutas com os seguintes elementos: Banana, Maçã, Pera, Uva, Morango.
// 2. Adicione Tangerina no final.
// 3. Adicione Goiaba no inicio.
// 4. Exiba o conteudo do indice 5.
// 5. Exclua o elemento uva.
// 6. Crie uma copia do array apenas com os elementos com indice 2, 3, e 4

console.log("-----------------atividade01----------------------");
var frutas = ["Banana", "Maça", "Pera", "Uva", "Morango"];
console.table(frutas);

console.log("-------------------atividade02-----------------");
frutas.push("tangerina");
console.table(frutas);

console.log("-------------------atividade03---------------");
frutas.unshift("Goiaba");
console.table(frutas);

console.log("--------------------atividade04------------------------------");
console.log(frutas[5]);

console.log("--------------------atividade05------------------");
var posiçao = frutas.indexOf("Uva");
frutas.splice(posiçao, 1);
console.log(frutas);

console.log("--------------------atividade06-----------------");
var copia = frutas.slice(2, 5);
console.table(copia);
