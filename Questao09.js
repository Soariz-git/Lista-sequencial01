// Fahrenheit para Celcius
const prompt = require("prompt-sync")();

let fah = parseInt(prompt("Me diga a temperatura em Fahrenheit: "))

let celsius = parseInt(5*((fah-32)/9))

console.log(`A conversão para Celsius é: ${celsius}`)