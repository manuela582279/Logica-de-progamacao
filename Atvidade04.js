/********************************************************************
                            Lista de exercício 04
********************************************************************/
// 1. Crie e imprima um vetor com 5 elementos numericos.
// 2. Impirma na tela o 3º elemento do vetor.
// 4. Altere o conteudo do vetor cópia para que seus valores sejam o dobro dos valores do vetor original.
// 5. crie uma matriz 3x3.
// 6. imprima os valores da diagonal principal.

console.log("-----------------atividade01-------------------");
var numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.table(numeros);

console.log("-----------------atividade02--------------");
console.log(numeros[2]);

console.log("-----------------atividade03------------");
var copia = numeros.slice();
console.table(copia);

console.log("-----------------atividade04--------------");
copia[0] = numeros[0] * 2;
copia[1] = numeros[1] * 2;
copia[2] = numeros[2] * 2;
copia[3] = numeros[3] * 2;
copia[4] = numeros[4] * 2;
console.table(copia);

console.log("------------------atividade05--------------");
var matriz = [
  [5, 3, 1],
  [4, 3, 2],
  [1, 2, 3],
];
console.table(matriz);

console.log("----------------atividade06----------------");
console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]);
