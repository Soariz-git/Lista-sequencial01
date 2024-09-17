// Converter metros em centimentros
const prompt = require ("prompt-sync")();

let metros = parseFloat(prompt("Digite a quantidade em metros para conversão: "))

let resultado = metros *100

console.log(`${resultado}cm`);
