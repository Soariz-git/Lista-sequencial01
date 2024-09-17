// Calculo ganho por hora
const prompt = require("prompt-sync")();

let ganho = parseFloat(prompt("Quanto você ganha por hora?"));

let horas = parseFloat(prompt("Quantas horas você trabalha no mês?"))

let salario = ganho * horas

console.log(`Total do salario no mês: ${salario}`);
