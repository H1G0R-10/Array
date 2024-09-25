function Numero() {
    const input = document.getElementById('numeros').value;
    const array = input.split(',').map(Number);
    let maiorNumero = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    }

    const resultado = document.getElementById('resultado');
    resultado.textContent = `O maior número no array é ${maiorNumero}.`;
}
