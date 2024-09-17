// Calcular a area de um quadrado
const prompt = require ("prompt-sync")();

let lados = parseFloat(prompt("Quantos cm tem os lados do quadrado?"))

let area = (lados*lados)*2

console.log(`A area do quadrado com valor dobrado é ${area} `);
