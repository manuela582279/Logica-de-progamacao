//**********************************************************
// Lista de exercícios 06
// *********************************************************
/*
 Criar uma função que receba o nome e a idade de uma pessoa e retorne uma mensagem informando se ela pode votar no Brasil.
 Regras para votação no Brasil:
 Menores de 16 anos: Não podem votar.
 Entre 16 e 17 anos ou acima de 70 anos: O voto é facultativo.
 Entre 18 e 70 anos: O voto é obrigatório.
 */

var idade = 15;
var nome = "manuela";
console.log("nome", nome, "idade", idade);
var votaçao = idade >= 15 ? "Não pode votar" : "Pode votar!";
console.log("idade:", idade, "-", votaçao);

var idade = 17;
var nome = "ana";
console.log("nome", nome, "idade", idade);
var votaçao = idade >= 17 ? "Pode votar!" : "Não pode votar";
console.log("idade:", idade, "-", votaçao);

var idade = 70;
var nome = "sofia";
console.log("nome", nome, "idade", idade);
var votaçao = idade >= 70 ? "O voto é obrigatóri!" : "O voto é obrigatório";
console.log("idade:", idade, "-", votaçao);

//-----------------Correçao da atividade--------------
const podeVotar = (idade) => {
  //isso é uma funçao
  if (idade < 16) {
    return "Nao pode votar";
  } else if (idade >= 18 && idade < 70) {
    return "Pode votar!";
  } else {
    return "Voto facultativo";
  }
};
var nome = ["Ygona", "Batata", "Fernanda", "Cristina"];
console.log("Ola", nome[0], "voce tem 16 anos e", podeVotar(16));
console.log("Ola", nome[1], "voce tem 16 anos e", podeVotar(22));
console.log("Ola", nome[2], "voce tem 16 anos e", podeVotar(70));
console.log("Ola", nome[3], "voce tem 16 anos e", podeVotar(12));
console.log("Ola", nome[4], "voce tem 16 anos e", podeVotar(67));
