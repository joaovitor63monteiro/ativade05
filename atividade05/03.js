let raio = parseFloat(prompt("Digite o valor do raio da esfera: "));

let volume = (4/3) * Math.PI * Math.pow(raio, 3);

console.log(`O volume da esfera é ${volume.toFixed(2)} unidades cúbicas.`);
