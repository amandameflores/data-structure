var valores = [8, 7, 6, 5, 4, 3, 2, 1];

function ordena() {
    let inicio = 0;
    let fim = 8;
    let tmp;

    for(vezes = 0; vezes < 8; vezes++){
    for (posicao = inicio; posicao < fim -1 - vezes; posicao++) {
        if (valores[posicao] > valores[posicao + 1]) {
            tmp = valores[posicao];
            valores[posicao] = valores[posicao + 1];
            valores[posicao + 1] = tmp;
            }
        }
    }
}

ordena();
console.log("Vetor ordenado...");
console.log(valores);