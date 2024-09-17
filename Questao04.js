// Pedir e dar a média de 4 notas
const prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("Sua nota em Portugues: "))

let n2 = parseFloat(prompt("Sua nota em Matematica: "))

let n3 = parseFloat(prompt("Sua nota em Geografia: "))

let n4 = parseFloat(prompt("Sua nota em Historia: "))

const media = (n1+n2+n3+n4)/4

console.log(`Sua media anual é ${media}`);
