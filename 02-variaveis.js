// Criando variáveis com "var" (var nome_variavel = <valor>;)
var nome = "Tibúrcio";
console.log("Meu nome é", nome);
var idade = 23;
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos");
idade = idade + 1;
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos");

console.log("-------------------------------");
// JavaScript trabalha com sistema case sensitive (maiuscula são diferentes de minusculas)
console.log("Criando uma variavel Teste e tentando acessar como");
let teste = "Varivel teste!'";
console.log(teste);
//REGRAS PARA NOMEAR IDENTIFICADORES(VARIAVEIS)
//Pode iniciar com 'A''-''Z','a-'z, '_' ou '$'
let MinhaVariavel = 10;
let outraVariavel = 2.65;
const _minhaConstante = "Uma constante qualquer!";
var $minhaVariavel = -5;

//variaveis logicos (boolean)
var nome = "Manuela";
var rico = false;
var eProfessor = true;
console.log(" Nome:", nome, "| É professor?", eProfessor, "| É rico?", rico);

// operaçoes relacionais ou comparadores
var x = 22;
var y = 5;
console.log("--------------");
console.log("x =", x, "| y=", y);
console.log("x é igual a y?", x == y);
console.log("x é dferente de y?", (x |= y));
console.log("x maior que y?", x > y);
console.log("x menor que y?", x < y);
console.log("x maior ou igaul a y?", x >= y);
console.log("x maior ou igaul a y?", x <= y);
