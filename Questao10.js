// Celcius para Fahrenheit
const prompt = require("prompt-sync")();

let celsius = parseInt(prompt("Me diga a temperatura em Celsius: "))

let fah = parseInt((celsius*9/5)+32)

console.log(`A conversão para Fahrenheit é: ${fah}`)