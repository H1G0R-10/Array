function Pares() {
    const input = document.getElementById('numero').value;
    const pares = input.split('').filter(digito => digito % 2 === 0);

    document.getElementById('resultado').innerText = 'numeros pares: ' + pares.join(', ');
}
