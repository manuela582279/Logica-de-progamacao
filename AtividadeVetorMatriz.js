/**************************************************************************
                        Exercício Vetor Matriz
 **************************************************************************/
// Crie um vetor que receberá dados de um usuario
var dados = [];
console.log("Favor informar seu nome:");
dados.push("Manuela");

console.table(dados);

console.log("Informe seu cpf");
dados.push("123.456.789-90");

console.table(dados);

//Mostre ao usuario os dados e de um bom dia!
console.log("Bom dia", dados[0], "meu CPF é", dados[1]);
