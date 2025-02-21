/*********************************************************
                      lista de exercico 07
 *********************************************************




Dada a matriz abaixo, faça um programa em JavaScript que multiplique seus elementos por um vapor x e exiba ao usuario a matriz antes e apos a multiplicação.
 | 3  5  8 |
 | 1  9  2 |
 | 7  1  4 | 
*/

var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
for (let linha = 0; linha < matriz.length; linha++)
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    linha == coluna &&
      // console.log("Matriz[", linha, "][", coluna, "] =",matriz[linha][coluna])
      console.log(`Matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
  }
/*
 Dada a matriz abaixo, faça um programa em JavaScript que multiplique seus elementos por um valor X e exiba ao usuário a matriz antes e após a multiplicação. 
|   3   5   8   |
|   1   9   2   |
|   7   1   4   |
*/
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
var x = 4;

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    matriz[linha][coluna] *= x;
  }
}
console.table(matriz);

//
console.log("numeros impares de 0 a 100");
for (let i = 1; i <= 100; i += 2) {}
console.log("numeros impares de 0 a 100");
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}
