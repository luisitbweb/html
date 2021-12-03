// Funcao sem retorno

function imprimirSoma(a, b){
    console.log(a + b);
}
imprimirSoma(2,3);
imprimirSoma(2);
imprimirSoma(2,5,6,9,7,2,4);
imprimirSoma();

// funcao com retorno
function soma(a, b = 0){
    return a +b;
}

console.log(soma(2,5));
console.log(soma(2));
console.log(soma());