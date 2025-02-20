// operadores de incremento e decremneto/ pré e pós incremento
var idade = 16;
console.log(idade);
idade++; // idade = idade + 1
console.log(idade);

idade--; // idade = idade - 1
console.log(idade);
console.log("-------------------");
var novaIdade = idade++;
console.log("idade:", idade, " | Nova Idade:", novaIdade);
novaIdade = ++idade;
console.log("Idade:", idade, "|Nova Idade:", novaIdade);

// operadores de atribuição aritrimetrica
console.log("-------------------");
var x = 10;
var y = 5;
console.log("x =", x, "| y =", y);

x += y; // x = x + y
console.log("x =", x, "| y =", y);

x -= y; // x = x - y
console.log("x =", x, "| y =", y);

x *= y; // x = x * y
console.log("x =", x, "| y =", y);

x /= y; // x = x / y
console.log("x =", x, "| y =", y);

x **= y; // x = x elevado a y
console.log("x =", x, "| y =", y);

x %= // x = resto da divisão inteira de x por y
  console.log("x =", x, "| y =", y);
