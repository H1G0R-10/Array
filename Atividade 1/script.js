let array = [];

function adicionar() {
    const valor = document.getElementById('s1').value;
    if (valor) {
        array.push(Number(valor));
        atualizarArray();
        calcularSoma();
    }
}

function remover() {
    array.pop();
    atualizarArray();
    calcularSoma();
}

function atualizarArray() {
    document.getElementById('array').innerText = 'Array: ' + array.join(', ');
}

function calcularSoma() {
    const soma = array.reduce((acc, val) => acc + val, 0);
    document.getElementById('soma').innerText = 'Soma: ' + soma;
}
