/*********************************************************
                      lista de exercico 07
 *********************************************************
 /*
 Dada a matriz abaixo, faça um programa em JavaScript que exiba ao usuario os elementos da sua diagonal principal com o laço de FOR.

 | 3 5 8 |
 | 1 9 2 |
 | 7 1 4 |
 */

 var matriz =[
    [3,5,8]
    [1,9,2]
    [7,1,4]
 ]
 console.table(matriz);
 for (let diagonal = 0; diagonal < matriz.length; diagonal++) {
    console.log(matriz[${diagonal}][${coluna}]=${matriz}[diagonal][coluna]);
    
 }