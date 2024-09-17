// Calcular a área de um circulo
const prompt = require("prompt-sync")();

let raio = parseFloat(prompt("Diga a o raio do circulo: "));



let area = parseInt(Math.PI) * (raio**2)

console.log(`A area do circulo é ${area}`);
