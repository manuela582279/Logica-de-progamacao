// criando uma função que soma dois valores e retorna o resultado
function somar2Mais2() {
  return 2 + 2;
}
console.log(somar2Mais2());

// criando uma função que soma dois valores e retorna o resultado
function somar(val1, val2) {
  return val1 + val2;
}
console.log("5 + 3 =", somar(5, 3));
console.log("12 + 8 =", somar(12, 8));
console.log("6,5 + 2,12 =", somar(6, 5, 2.12));

var v1 = 9;
var v2 = 6;
console.log("v1 + v2 =", somar(v1, v2));

// criando uma funçao que escreve "Bom dia!"
function bomDia(nome) {
  console.log("Ola", nome, "Bom dia para voce!");
}
bomDia("Manuela");

//Criando uma função que calcula e retorna o desconto em uma venda
function desconto(valor) {
  return (valor * 5) / 100;
}
//console.log("O desconto do produto no valor de R$100,00 é R$", desnconto (100));
var totalPedido = 100;
var totalDesconto = desconto(totalPedido);
var valorFinal = totalPedido - totalDesconto;

console.log("-----------------------------");
console.log("total do pedido: R$", totalPedido);
console.log("total dos descontos: R$", totalDesconto);
console.log("valor liquido: R$", valorFinal);

//criando uma funçao que apresneta pessoa com array function
const apresentaPessoas = (nomePessoa, idade, Cidade) => {
  //apresnto a voces: Nome Pessoa, que tem "XX", anos e mora em "Cidade"
  console.log(
    "Apresnto a voces:",
    nomePessoa,
    "que tem",
    idade,
    "anos e mora em",
    Cidade
  );
};
apresentaPessoas("Zuleika", 18, "Brotas");
apresentaPessoas("Pafuncio", 21, "Jaú");
apresentaPessoas("Epaminondas", 16, "Barra Bonita");
