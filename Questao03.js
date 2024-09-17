// Pedir e somar 2 números
const prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("Digite um número: "))

let n2 = parseFloat(prompt("Digite mais um número: "))

const soma = n1 + n2

console.log(`A soma dos dois números é ${soma}`);
