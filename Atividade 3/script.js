function Indice() {
    const array = [1, 2, 3, 4, 3, 5, 8];
    const valor = parseFloat(document.getElementById('valor').value);
    const indice = array.indexOf(valor);

    const resultado = document.getElementById('resultado');
    if (indice !== -1) {
        resultado.textContent = `O primeiro indice do valor ${valor} é ${indice}.`;
    } else {
        resultado.textContent = `O valor ${valor} não foi encontrado.`;
    }
}
