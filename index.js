const prompt = require("prompt-sync")({ sigint: true });

let base = Number(prompt('Digite a base da potência: '));
let expo = Number(prompt('Digite o expoente da potencia: '));
let soma = 0

for (let k = 0; k < expo; k++) {
    for (let j = 0; j < base; j++){
        soma += base
    }
}
console.log('O resultado é: '+soma);
