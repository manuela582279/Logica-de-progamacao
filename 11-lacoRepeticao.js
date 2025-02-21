//Laço de repetição - FDR

// O professor te colocou de castigo e pediu para voce escrever mil vezes a frase "Eu vou prestar atenção as"
for (let i = 0; i < 1000; i++) {
  console.log("Eu vou prestar atenção às aulas");
}

//Escreva todos os numeros de 1 a 20 com loop for
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

//mostre no consle dos sistemas os numeros pares entre 1 a 20
for (let i = 1; i <= 20; i++) {
  i % 2 == 0 && console.log(i);
}

// Dado um vetor, calculo e exiba o somatorio de seus elementos
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(numeros.length);
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("soma dos elementos:", soma);

//dado um vetor, calculo e exiba a quantidade de pares e de impares
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var pares = 0;
var impares = 0;
for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? pares++ : impares++;
}
console.log("total de pares:", pares);
console.log("total de impares:", impares);

// dado um vetor, multipliquem todos os seus elementos por 3 com laço FOR
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.table(numeros);
for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3;
}
console.log("Vetor multiplicado por 3");
console.table(numeros);
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.table(numeros);

for (let i = 0; i < numeros.length; i++)
  [
    (numeros[i] *= 3), // numeros [i] = numeros [i] * 3;
  ];

console.log("Vetor multiplicação por 3");
console.table(numeros);

// dada uma matriz 2x3, mostre ao usuario todos os seus elementos com as respectivas posiçao
var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    // console.log("Matriz[", linha, "][", coluna, "] =", matriz[linha][coluna]);
    console.log(`Matriz[${linha}][${coluna}] = ${matriz[linha][coluna]}`);
  }
}

//laço repetiçao - while / do while
//while testa a condiçao antes de entrar no laço de repetiçao
// se a condiçao for inicialmente falsa e o laço

var t = 10;

while (t >= 10) {
  console.log("entrei no laço while...");
  t = 0;
}
console.log("terminei");

var i = 0;
while (i <= 100) {
  console.log(`Escrito de linha ${i}`);
  i++;
}

// laço repetiçao while
// while(condiçao){
// fragmentos e codigo
// fragmentos e codigo
// fragmentos e codigo
// fragmentos e codigo
//contador++ | nesta parte o contador é a variavel de controle de acesso
//}
