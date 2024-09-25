function ordenarArray() {
    const input = document.getElementById('numeros').value;
    const array = input.split(',').map(Number);
    array.sort((a, b) => a - b);

    const resultado = document.getElementById('resultado');
    resultado.textContent = `Array ordenado: ${array.join(', ')}.`;
}
