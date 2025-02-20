/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************


1. Par ou Ímpar?
Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.


📌 Dica: Use o operador % para verificar o resto da divisão.
------------------------------------------------------------------------


2. Tabuada
Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.


📌 Exemplo (se o número for 3):
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
------------------------------------------------------------------------


3. Fatorial de um Número
Solicite um número ao usuário e exiba no console o seu fatorial.


📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
------------------------------------------------------------------------


4. Soma dos Números de um Array
Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.


📌 Exemplo:
let numeros = [10, 20, 30, 40];  
// Saída: Soma = 100
------------------------------------------------------------------------


5. Ordenação de Números
Peça ao usuário para inserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.*/

console.log("----------atividade01-----------");

console.log("-----------atividade02---------");
console.log(numeros, "x 1 =", numeros * 1);
console.log(numeros, "x 2 =", numeros * 2);
console.log(numeros, "x 3 =", numeros * 3);
console.log(numeros, "x 4 =", numeros * 4);
console.log(numeros, "x 5 =", numeros * 5);
console.log(numeros, "x 6 =", numeros * 6);
console.log(numeros, "x 7 =", numeros * 7);
console.log(numeros, "x 8 =", numeros * 8);
console.log(numeros, "x 9 =", numeros * 9);
console.log(numeros, "x 10 =", numeros * 10);

console.log("----------atividade03----------");
console.log("Fatorial de 5! =", 5 * 4 * 3 * 2 * 1);

console.log("----------atividade04------------");
function somar(val1, val2, val3) {
  return val1 + val2 + val3;
}
console.log("10 + 15 + 20 =", somar(10, 15, 20));

console.log("-----------atividade05--------");
var numeros = [3, 5, 1, 8, 6, 2];
console.table(numeros);

numeros.sort();
console.table(numeros);
